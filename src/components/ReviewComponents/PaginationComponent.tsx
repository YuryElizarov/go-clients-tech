import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ChevronIcon, ChevronRightIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0 0;
  gap: 32px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 26px;
    padding: 10px 0 0;
  }
`

const TextButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding: 0;
  gap: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  border: none;
  cursor: pointer;
  background: none;
  color: ${({theme}) => theme.colors.darkGrey};

  svg path {
    stroke: ${({theme}) => theme.colors.darkGrey};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Pages = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Page = styled.button<{isActive?: boolean}>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0;
  gap: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  border: none;
  background: ${({theme, isActive}) => isActive ? theme.colors.green : 'transparent'};
  color: ${({theme, isActive}) => theme.colors[isActive ? 'white' :'black']};
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.ll} {
    width: 26px;
    height: 26px;
    font-size: 12px;
  }
`
const pages = [...Array(17).keys()];

const before = 2
const after = 3

function PaginationComponent({...props}) {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const {t} = useTranslation()
    const startIndex = useMemo(() => currentPage - before <= 0 ? 0 : currentPage - before, [currentPage])
    const endIndex = useMemo(() => currentPage + after >= pages.length ? pages.length : currentPage + after, [currentPage])
    return (
        <Wrapper {...props}>
            <TextButton
                onClick={() => setCurrentPage(prevState => prevState - 1 < 0 ? 0 : prevState - 1)}><ChevronIcon/> {t("pagination.preview")}
            </TextButton>
            <Pages>
                {
                    startIndex !== 0 &&
                    <>
                        <Page onClick={() => setCurrentPage(pages[0])}>{pages[0] + 1}</Page>
                        <Page>...</Page>
                    </>
                }
                {
                    pages.slice(startIndex, endIndex).map((page, id) => <Page isActive={page === currentPage} onClick={() => setCurrentPage(page)}
                                                                              key={`Page-${id}`}>{page + 1}</Page>)
                }
                {
                    endIndex !== pages.length &&
                    <>
                        <Page>...</Page>
                        <Page
                            onClick={() => setCurrentPage(pages[pages.length - 1])}>{pages[pages.length - 1] + 1}</Page>
                    </>
                }
            </Pages>
            <TextButton
                onClick={() => setCurrentPage(prevState => prevState + 1 > pages.length ? pages.length - 1 : prevState + 1)}>{t("pagination.next")}<ChevronRightIcon/>
            </TextButton>
        </Wrapper>
    );
}

export default PaginationComponent;