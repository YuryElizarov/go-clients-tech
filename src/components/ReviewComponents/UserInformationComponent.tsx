import React, {useCallback} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {UserIcon} from "../../UI/Svg";
import {IUser} from "../../types";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {useReviewAction} from "../../store/review/hooks";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};

  svg path {
    stroke: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`

const Name = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

export const TextButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  background: none;
  color: ${({theme}) => theme.colors.green};
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
function UserInformationComponent({user: {name, soname}, date, reviewId}: {user: IUser, date: string, reviewId: number }) {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    const {onSelectReview} = useReviewAction()

    const onAnswer = useCallback(() => {
        onSelectReview(reviewId)
        onShowModal(EModals.ReviewAnswer)
    }, [reviewId])

    return (
        <Wrapper>
            <Account>
                <UserIcon width={24} height={24}/>
            </Account>
            <Info>
                <Name>
                    {name} {soname}
                </Name>
                <Footer>
                    <Date>{t("reviews.review")} {date}</Date>
                    <TextButton onClick={onAnswer}>{t("reviews.answer")}</TextButton>
                </Footer>
            </Info>
        </Wrapper>
    );
}

export default UserInformationComponent;