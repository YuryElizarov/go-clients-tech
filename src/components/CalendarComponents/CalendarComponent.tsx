import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import {getDaysInMonth} from "../../views/CalendarViews/MonthView";
import {MonthDayComponent} from "./index";
import {ICalendarEvent} from "../../types";
import {getFormatDayTitle} from "../../views/CalendarViews/WeekView";
import {mockMonth} from "../../mock/calendar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 40px;
  gap: 15px;
  min-height: 357px;
  width: calc(100% / 4);
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 36px;
    gap: 12px;
  }
`

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  text-transform: capitalize;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const Calendar = styled.div`
  width: 100%;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20.3px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;  
  }
`

const Days = styled(Header)`
  flex-wrap: wrap;
`

const Block = styled.div<{ isHoliday?: boolean }>`
  width: 32px;
  height: 32px;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme, isHoliday}) => theme.colors[isHoliday ? 'red' : 'grayC4']};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    width: 28px;
    height: 28px;
  }
`

const DayWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const DayContent = styled(MonthDayComponent)<{isShow: boolean}>`
  position: absolute;
  width: 320px;
  left: 0;
  top: 0;
  opacity: ${({isShow}) => isShow ? 1 : 0};
  visibility: ${({isShow}) => isShow ? 'visible' : 'hidden'};
  transform: translateY(-100%);
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 10px;
`

const Day = styled(Block)<{ isNotCurrent?: boolean, isToday?: boolean, isSelect?: boolean }>`
  font-weight: 500;
  border-radius: 50%;
  cursor: pointer;
  background: ${({
                   theme,
                   isToday,
                   isSelect
                 }) => theme.colors[isToday ? 'green' : isSelect ? 'greenHover' : 'background']};
  opacity: ${({isNotCurrent}) => isNotCurrent ? .6 : 1};
  color: ${({theme, isHoliday, isToday, isSelect}) => theme.colors[isToday ? 'white' : isSelect ? 'green' : isHoliday ? 'red' : 'black']};
`
const getTitle = (date: Date) => new Intl.DateTimeFormat('ru', {month: 'long'}).format(date)

function CalendarComponent({date}: { date: Date }) {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const today = useMemo(() => new Date(), []);

    const countDays = useMemo(() => getDaysInMonth(date.getFullYear(), date.getMonth() + 1), [])
    const firstDayId = useMemo(() => {
        const currentMonthDate = new Date(date.getFullYear(), date.getMonth(), 0)
        return currentMonthDate.getDay()
    }, [])

    const monthData: { [day: number]: { title: string, isPast: boolean, data: ICalendarEvent[] } } = useMemo(() => {
        const obj: { [day: number]: { title: string, isPast: boolean, data: ICalendarEvent[] } } = {}
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        for (const mockMonthKey in mockMonth) {
            if (mockMonthKey in mockMonth) {
                const dayId = Number(mockMonthKey)
                const currentDate = new Date(year, month - 1, dayId)
                obj[mockMonthKey] = {
                    title: getFormatDayTitle(currentDate),
                    isPast: false,
                    data: mockMonth[dayId] || []
                }
            }
        }
        return obj
    }, [])

    return (
        <Wrapper>
            <Title>{getTitle(date)}</Title>
            <Calendar>
                <Header>
                    <Block>Пн</Block>
                    <Block>Вт</Block>
                    <Block>Ср</Block>
                    <Block>Чт</Block>
                    <Block>Пт</Block>
                    <Block isHoliday>Сб</Block>
                    <Block isHoliday>Вс</Block>
                </Header>
                <Days>
                    {
                        firstDayId > 0 && [...Array(firstDayId - 1).keys()].reverse().map((id) =>
                            (
                                <Day isNotCurrent isHoliday={false} key={`Past-${id}`}/>
                            )
                        )
                    }
                    {
                        [...Array(countDays).keys()].map((id) => {
                            const currentData = new Date(date.getFullYear(), date.getMonth(), id)
                            const isHoliday = currentData.getDay() === 0 || currentData.getDay() === 6
                            const isToday = today.getFullYear() === currentData.getFullYear() && today.getMonth() === currentData.getMonth() && today.getDate() === currentData.getDate()
                            return (
                                <DayWrapper key={`Current-${id}`}>
                                    <Day  onClick={() => setSelectedDay(prevState => prevState === id ? null : id)} isSelect={!!monthData[id]} isToday={isToday} isHoliday={isHoliday}>{id + 1}</Day>
                                    {monthData[id] &&
                                        <DayContent isShow={id === selectedDay} data={monthData[id].data} isPast={monthData[id].isPast}
                                                    key={id} onClose={() => setSelectedDay(null)}
                                                    title={monthData[id].title}/>}
                                </DayWrapper>
                            )
                        })
                    }
                </Days>
            </Calendar>
        </Wrapper>
    );
}

export default CalendarComponent;