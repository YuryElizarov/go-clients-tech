import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ChevronRightIcon} from "../../../UI/Svg";
import UserSearchComponent from './UserSearchComponent';
import {mockSearchDropdown} from "../../../mock/search";
import {useAppAction} from "../../../store/app/hooks";
import {EModals} from "../../../store/app/types";

interface ResultListComponentProps {
    isShow: boolean,
    onClose: () => void
}

const ListStyled = styled.div<{isShow: boolean}>`
  position: absolute;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  min-height: 56px;
  padding-top: 56px;
  visibility: ${({isShow}) => isShow ? 'visible' : 'hidden'};
  opacity: ${({isShow}) => isShow ? '1' : '0'};
  ${({theme}) => theme.mediaQueries.ll} {
    min-height: 46px;
    padding-top: 46px;
  }
`

const ShowAllBlock = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  cursor: pointer;
  color: ${({theme}) => theme.colors.green};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    font-size: 12px;
    gap: 5px;
  }
`

function ResultListComponent({isShow, onClose}: ResultListComponentProps) {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()

    return (
        <ListStyled isShow={isShow}>
            {
                mockSearchDropdown.map((item, id) => <UserSearchComponent key={`Item-${id}`} item={item}/>)
            }
            <ShowAllBlock onClick={() => {
                onShowModal(EModals.Search)
                onClose()
            }}>
                {t("search.show_all")}
                <ChevronRightIcon/>
            </ShowAllBlock>
        </ListStyled>
    );
}

export default ResultListComponent;