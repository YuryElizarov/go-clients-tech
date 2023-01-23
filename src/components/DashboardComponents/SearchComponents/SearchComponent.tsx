import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {SearchIcon} from "../../../UI/Svg";
import ResultListComponent from './ResultListComponent';

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 554px;
  z-index: 1;
`

const SearchBlock = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`

const Input = styled.input<{isShow: boolean}>`
  width: 100%;
  outline: none;
  padding: 17px 24px;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-color: ${({theme, isShow}) => isShow ? theme.colors.borderInputDefault : '#fff'};
  box-shadow: ${({isShow}) => isShow ? `none` : '0 5px 25px rgba(0, 0, 0, 0.03)'};
  font-weight: 700;
  border-radius: 56px;
  &::placeholder {
    font-weight: 400;
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 13px 20px;
    font-size: 12px;
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
`

function SearchComponent() {
    const {t} = useTranslation()
    const [search, setSearch] = useState<string>('');
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        if (search.length >= 3 && !isShow) {
            setIsShow(true)
        } else if (search.length < 3 && isShow) {
            setIsShow(false)
        }
    }, [search, isShow])

    return (
        <SearchWrapper>
            <SearchBlock>
                <Input isShow={isShow} placeholder={t("search.placeholder") as string} value={search} onChange={event => setSearch(event.target.value)}/>
                <Icon>
                    <SearchIcon/>
                </Icon>
            </SearchBlock>
            <ResultListComponent isShow={isShow} onClose={() => {
                setSearch('')
                setIsShow(!isShow)
            }} />
        </SearchWrapper>
    );
}

export default SearchComponent;