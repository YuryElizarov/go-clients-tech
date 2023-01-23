import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {FacebookIcon, GoogleIcon, ReitingIcon} from "../../UI/Svg";
import UserInformationComponent, {TextButton} from './UserInformationComponent';
import {IReview} from "../../types";

export const ReviewWrapper = styled.div<{isAnswer: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({isAnswer}) => isAnswer ? '0' : '20px' };
  gap: 15px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: ${({isAnswer}) => isAnswer ? 'none' : ' 0 5px 25px rgba(0, 0, 0, 0.03)' };
  border-radius: ${({isAnswer}) => isAnswer ? '0' : '10px' };
  width: 100%;
  min-width: 900px;

  &:first-child {
    border-radius: 0 0 10px 10px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding: ${({isAnswer}) => isAnswer ? '0' : '16px' };
  }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const Rating = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
  }
`

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;
  border: 1px solid ${({theme}) => theme.colors.grayC4};
  border-radius: 56px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};

  span {
    display: flex;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 7px 12px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`
const Content = styled.div<{ isShowMore: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  width: 100%;
  max-height: ${({isShowMore}) => isShowMore ? 'unset' : '100px'};
  overflow: hidden;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const AnswerBlock = styled.div`
  margin-top: 17px;
  width: 100%;
  padding-left: 24px;
  border-left: 1px solid ${({theme}) => theme.colors.green};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 15px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    padding-left: 20px;
  }
`

function ReviewComponent({review: {user, content, date, childReview, stars, id, social}, isAnswer, isShowAnswer = true, ...props}: {review: IReview, isAnswer: boolean, isShowAnswer?: boolean}) {

    const {t} = useTranslation()
    const [isShowMore, setIsShowMore] = useState<boolean>(true);
    const [isShowMoreButton, setIsShowMoreButton] = useState<boolean>(false);
    const contentBlock = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        if (contentBlock.current !== null) {
            if (contentBlock.current.offsetHeight > 100) {
                setIsShowMoreButton(true)
                setIsShowMore(false)
            }
        }
    }, [contentBlock])

    return (
        <ReviewWrapper isAnswer={isAnswer} {...props}>
            <Header>
                <UserInformationComponent user={user} date={date} reviewId={id}/>
                <Rating>
                    {social === "Facebook" && <FacebookIcon width={24} height={24}/>}
                    {social === "Google" && <GoogleIcon width={24} height={24}/>}
                    {stars && <Stars>
                        <span>{stars}</span>
                        <ReitingIcon width={22} height={22}/>
                    </Stars>}
                </Rating>
            </Header>
            {
                content &&
                <ContentWrapper>
                    <Content isShowMore={isShowMore} ref={contentBlock}>
                        {content}
                    </Content>
                    {
                        isShowMoreButton && <TextButton onClick={() => setIsShowMore(!isShowMore)}>{t(`reviews.${isShowMore ? 'less' : 'more'}`)}</TextButton>
                    }
                </ContentWrapper>
            }
            {
                (isShowAnswer && childReview && childReview?.length > 0) && <AnswerBlock>
                    {childReview.map((item) => <ReviewComponent key={`Anser-${id}-${item.id}`} review={item} isAnswer/>)}
                </AnswerBlock>
            }
        </ReviewWrapper>
    );
}

export default ReviewComponent;