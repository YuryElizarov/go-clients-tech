import React from 'react';
import styled from "styled-components";
import {ReviewListView, StatisticView} from "../../views/ReviewViews";
import {AnswerReviewModal} from "../../components/Modals";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  margin-top: 12px;
`

function ReviewPage() {
    return (
        <>
            <AnswerReviewModal/>
            <Wrapper>
                <ReviewListView/>
                <StatisticView/>
            </Wrapper>
        </>
    );
}

export default ReviewPage;