import React, {useMemo} from 'react';
import styled from "styled-components";
import {MonthDayComponent} from "../../components/CalendarComponents";
import {getFormatDayTitle} from "./WeekView";
import {ICalendarEvent} from "../../types";
import {mockMonth} from "../../mock/calendar";


const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
`

export function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
}
export function isInThePast(date: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

function MonthView() {

    const monthData: { title: string, isPast: boolean, data: ICalendarEvent[] }[] = useMemo(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const daysInMonth = getDaysInMonth(year, month)
        const data = [...Array(daysInMonth).keys()]
        return data.map((item) => {
            const date = new Date(year, month - 1, item + 1)
            return {
                title: getFormatDayTitle(date),
                isPast: isInThePast(date),
                data: mockMonth[item] || []
            }
        })
    }, [])


    return (
        <Wrapper>
            {
                monthData.map((item, id) => <MonthDayComponent data={item.data} isPast={item.isPast} key={id} title={item.title}/>)
            }
        </Wrapper>
    );
}

export default MonthView;