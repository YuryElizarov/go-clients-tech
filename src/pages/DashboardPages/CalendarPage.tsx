import React from 'react';
import styled from "styled-components";
import {CalendarDetailModal, DeleteEventModal, NewEventModal} from '../../components/Modals';
import {DayView, HeaderView, MonthView, WeekView, YearView} from "../../views/CalendarViews";
import {useCalendarState} from "../../store/calendar/hooks";
import {EDuration} from "../../store/calendar/types";
import {mockDay} from "../../mock/calendar";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background};
`

const WrapperOverflow = styled.div`
  width: 100%;
  max-height: 832px;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`

function CalendarPage() {
    const {selectedDuration} = useCalendarState()
    return (
        <>
            <CalendarDetailModal/>
            <DeleteEventModal/>
            <NewEventModal/>
            <Wrapper>
                <HeaderView/>
                <WrapperOverflow>
                    {selectedDuration === EDuration.Day && <DayView date={new Date()} data={mockDay}/>}
                    {selectedDuration === EDuration.Week && <WeekView/>}
                    {selectedDuration === EDuration.Month && <MonthView/>}
                    {selectedDuration === EDuration.Year && <YearView/>}
                </WrapperOverflow>
            </Wrapper>
        </>
    );
}

export default CalendarPage;