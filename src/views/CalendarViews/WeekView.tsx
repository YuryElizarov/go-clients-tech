import React, {useMemo} from 'react';
import styled from "styled-components";
import {DayView} from "./index";
import {ICalendarEvent} from "../../types";
import {mockWeek} from "../../mock/calendar";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0;
  border-radius: 0 0 10px 10px;
`
const TimeColumn = styled.div`
  min-width: 82px;
  border-right: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`
const ContentBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const days: Array<{ id: number, offset: number }> = [
    {
        id: 0,
        offset: 0,
    },
    {
        id: 1,
        offset: 0,
    },
    {
        id: 2,
        offset: 0,
    },
    {
        id: 3,
        offset: 0,
    },
    {
        id: 4,
        offset: 0,
    },
    {
        id: 5,
        offset: 0,
    },
    {
        id: 6,
        offset: 0,
    },
]

export const getFormatDayTitle = (date: Date) => {
    const month = new Intl.DateTimeFormat('ru', {month: 'short'}).format(date);
    const dateNumber = new Intl.DateTimeFormat('ru', {day: '2-digit'}).format(date);
    const day = new Intl.DateTimeFormat('ru', {weekday: 'short'}).format(date);
    return `${day}, ${dateNumber} ${month}`
}

function WeekView() {

    const daysArr: Array<{ title: string, id: number, offset: number, date: Date, data: ICalendarEvent[] }> = useMemo(() => {
        const currentDayId = new Date().getDay()
        return days.map((day) => {
            const date = new Date()
            const offset = day.id - currentDayId
            date.setDate(date.getDate() + offset)
            return {
                ...day,
                title: getFormatDayTitle(date),
                data: mockWeek[day.id],
                offset,
                date
            }
        })
    }, [])

    return (
        <Wrapper>
            <TimeColumn/>
            <ContentBlock>
                {daysArr.map((day) => <DayView data={day.data} date={day.date} isRenderTimeColum={false} isFirst={day.id === 0}
                                               key={`Day-${day.id}`} title={day.title}/>)}
            </ContentBlock>
        </Wrapper>
    );
}

export default WeekView;