import React from 'react';
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import DetailComponent from "../CalendarComponents/DetailComponent";
import {mockDetail} from "../../mock/calendar";


const Content = styled.div`
  padding: 20px;
  width: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`


function CalendarDetailModal() {
    const {modals} = useAppState()

    if (!modals[EModals.CalendarDetail]) return null;
    return (
        <Modal modal={EModals.CalendarDetail} title=''>
            <Content>
                <DetailComponent items={mockDetail}/>
            </Content>
        </Modal>
    );
}

export default CalendarDetailModal;