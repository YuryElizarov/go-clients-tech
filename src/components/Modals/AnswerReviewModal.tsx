import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Modal} from "../../UI/Modal";
import {useAppState} from "../../store/app/hooks";
import {EModals} from '../../store/app/types';
import {ReviewComponent} from "../ReviewComponents";
import {NewMessageComponent} from "../MessengerComponents";
import {useReviewAction, useReviewState} from "../../store/review/hooks";


const ReviewStyled = styled(ReviewComponent)`
  max-width: 988px;
`

function AnswerReviewModal() {
    const {t} = useTranslation()
    const {selectedReview} = useReviewState()
    const [message, setMessage] = useState<string>('');
    const {modals} = useAppState()
    const {onUnselectReview} = useReviewAction()
    if (!selectedReview || !modals[EModals.ReviewAnswer]) return null;

    return (
        <Modal modal={EModals.ReviewAnswer} onCloseAction={onUnselectReview} title={t("reviews.modal.title")}
        >
            {selectedReview && <ReviewStyled review={selectedReview} isAnswer={false} isShowAnswer={false}/>}
            <NewMessageComponent message={message} onChange={val => setMessage(val)} placeholder={t('reviews.modal.placeholder') as string}/>
        </Modal>
    );
}

export default AnswerReviewModal;