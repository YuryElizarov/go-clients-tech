import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import {SearchIcon} from "../../UI/Svg";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 10;
`

const IconButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  justify-content: center;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const SearchBlock = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 17px 24px;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-color: ${({theme}) => theme.colors.borderInputDefault};
  box-shadow: none;
  font-weight: 700;
  border-radius: 56px;

  &::placeholder {
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 20px;
  }
`

const Icon = styled.button`
  border: none;
  outline: none;
  display: flex;
  padding: 8px;
  background: ${({theme}) => theme.colors.lightBiege};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  border-radius: 50%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px;
  }
`

const Menu = styled.div<{isShowMenu: boolean}>`
  width: 800px;
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.03));
  top: 50%;
  z-index: 2;
  right: -16px;
  position: absolute;
  transform: translateY(-50%);
  opacity: ${({isShowMenu}) => isShowMenu ? 1 : 0};
  visibility: ${({isShowMenu}) => isShowMenu ? 'visible' : 'hidden'};
`

const FilterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 72px 15px 15px;
  gap: 16px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 30px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding: 58px 12px 12px;
  }
`
const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
`

const RowInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const MenuInput = styled.input`
  border: none;
  max-width: 686px;
  height: 32px;
  padding: 5px 10px;
  width: 100%;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  outline: none;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 5px 10px;
    font-size: 12px;
  }
`

const DateStyled = styled.div`
  border: none;
  height: 32px;
  padding: 5px 10px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  min-width: 128px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 5px 8px;
    font-size: 12px;
  }
`

const Dates = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  font-weight: 400;
  font-size: 16px;
  max-width: 686px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  .react-datepicker-wrapper {
    width: unset;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
    </DateStyled>
))

function SearchComponent() {
    const {t} = useTranslation()
    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<{
        keywords: string
        membership: string
        nameOrNumber: string
        from: Date | null
        to: Date | null
    }>({
        keywords: '',
        membership: '',
        nameOrNumber: '',
        from: null,
        to: null,
    });
    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    const dropdown = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleClickOutside = useCallback((e: any) => {
        if (!e.path.includes(dropdown.current)) {
            setShowMenu(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        }
    }, [handleClickOutside])
    return (
        <Wrapper ref={dropdown}>
            <IconButton onClick={() => setShowMenu(!showMenu)}><SearchIcon/></IconButton>
            <Menu isShowMenu={showMenu}>
                <SearchBlock>
                    <Input placeholder={t("calendar.search.placeholder") as string} value={search}
                           onChange={event => setSearch(event.target.value)}/>
                    <Icon>
                        <SearchIcon/>
                    </Icon>
                </SearchBlock>
                <FilterBlock>
                    <RowInput>
                        <Label>{t("calendar.search.labels.what")}</Label>
                        <MenuInput type='text' value={data.keywords}
                                   placeholder={t("calendar.search.placeholders.keywords") as string}
                                   onChange={(e) => onChange('keywords', e.target.value)}/>
                    </RowInput>
                    <RowInput>
                        <Label>{t("calendar.search.labels.who")}</Label>
                        <MenuInput type='text' value={data.membership}
                                   placeholder={t("calendar.search.placeholders.membership") as string}
                                   onChange={(e) => onChange('membership', e.target.value)}/>
                    </RowInput>
                    <RowInput>
                        <Label>{t("calendar.search.labels.room")}</Label>
                        <MenuInput type='text' value={data.nameOrNumber}
                                   placeholder={t("calendar.search.placeholders.name_or_number") as string}
                                   onChange={(e) => onChange('nameOrNumber', e.target.value)}/>
                    </RowInput>
                    <RowInput>
                        <Label>{t("calendar.search.labels.date")}</Label>
                        <Dates>
                            <DatePicker
                                selected={data.from}
                                onChange={(date) => onChange('from', date)}
                                placeholderText={t("calendar.search.placeholders.from") as string}
                                customInput={<CustomInput/>}
                                dateFormat="dd MMM yyyy, hh:mm aa"
                            />
                            —
                            <DatePicker
                                selected={data.to}
                                onChange={(date) => onChange('to', date)}
                                placeholderText={t("calendar.search.placeholders.to") as string}
                                customInput={<CustomInput/>}
                                dateFormat="dd MMM yyyy, hh:mm aa"
                            />
                        </Dates>
                    </RowInput>
                    <Buttons>
                        <ButtonStyled variant={EButtonVariants.Text}>{t("calendar.search.buttons.clear")}</ButtonStyled>
                        <ButtonStyled
                            variant={EButtonVariants.Default}>{t("calendar.search.buttons.find")}</ButtonStyled>
                    </Buttons>
                </FilterBlock>
            </Menu>
        </Wrapper>
    );
}

export default SearchComponent;