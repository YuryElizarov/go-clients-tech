import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {ReviewComponent, ReviewFilterComponent} from '../../components/ReviewComponents';
import {useReviewState} from "../../store/review/hooks";
import PaginationComponent from "../../components/ReviewComponents/PaginationComponent";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  flex: 1;
  padding-bottom: 24px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
  background: ${({theme}) => theme.colors.background};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px 10px 0 0;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
`

function ReviewListView({isShowFilter, ...props}: {isShowFilter?: boolean}) {
    const {t} = useTranslation()
    const {reviews} = useReviewState()
    return (
        <Wrapper {...props}>
            <Header>
                <HeadingStyled as='h3'>{t("reviews.title")}</HeadingStyled>
                {isShowFilter ? <ReviewFilterComponent/> : <ButtonStyled variant={EButtonVariants.Default}>{t("website.review.button")}</ButtonStyled>}
            </Header>
            <List>
                {
                    reviews.map((review) => <ReviewComponent key={`Review-${review.id}`} review={review} isAnswer={false}/>)
                }
                <PaginationComponent/>
            </List>
        </Wrapper>
    );
}

export default ReviewListView;