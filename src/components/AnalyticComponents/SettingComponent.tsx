import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {DoctorIcon, SliderHorizontalIcon} from "../../UI/Svg";
import {Dropdown} from "../../UI/Dropdown";
import {IUser} from "../../types";
import {useProfileState} from "../../store/profile/hooks";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`


const IconButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  justify-content: center;

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

const Menu = styled.div<{showMenu: boolean}>`
  border-radius: 10px;
  background: ${({theme}) => theme.colors.background};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 15px;
  min-width: 320px;
  position: absolute;
  bottom: -5px;
  transform: translateY(100%);
  right: -40px;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  opacity: ${({showMenu}) => showMenu ? "1" : "0"};
  visibility: ${({showMenu}) => showMenu ? "visible" : "hidden"};

  & > span {
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    right: 43px;
    border: 10px solid transparent;
    border-bottom: 8px solid ${({theme}) => theme.colors.borderInputDefault};
    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 8px solid transparent;
      border-bottom: 6px solid white;
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px;
    gap: 12px;
  }
`
const UserOptionStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg:first-child {
    margin-right: 6px;
    path {
      fill: ${({theme}) => theme.colors.gray};
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
  span {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const UserOption = ({name, soname, id}: IUser) => (
    <UserOptionStyled>
        <DoctorIcon height={16} width={16}/>
        <Text>{name} {soname} <span>– ID {id}</span></Text>
    </UserOptionStyled>
)

const optService: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Узи брюшной полости',
        value: '0'
    },
    {
        item: 'Узи брюшной полости',
        value: '1'
    },
]

const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  & > div {
    width: 100%;
    display: flex;
  }
`


const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;

  & > div:first-child {
    width: 100%;
    padding: 8px;
  }
`

function SettingComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        service: '',
        doctor: ''
    }>({
        service: '',
        doctor: ''
    });
    const {profiles} = useProfileState()
    const activities: Array<{item: ReactNode, value: number}> = useMemo(() => (
        profiles.map((profile) => ({
            item: <UserOption {...profile}/>,
            value: profile.id || 0
        }))
    ), [t, profiles])

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
            <IconButton onClick={() => setShowMenu(!showMenu)}><SliderHorizontalIcon/></IconButton>
            <Menu showMenu={showMenu}>
                <span/>
                <InputWrapper>
                    <Label>{t("analytic.filters.service")}</Label>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={data.service} placeholder={t("analytic.filters.service")}
                                    onSelect={val => onChange('service', val)} options={optService} label=""/>
                </InputWrapper>
                <InputWrapper>
                    <Label>{t("analytic.filters.doctor")}</Label>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={data.doctor || 0} placeholder=''
                                    onSelect={val => onChange('doctor', val)} options={activities} label=""/>
                </InputWrapper>
            </Menu>
        </Wrapper>
    );
}

export default SettingComponent;