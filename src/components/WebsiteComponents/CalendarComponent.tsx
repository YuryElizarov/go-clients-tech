import React, {useMemo} from 'react';
import styled from 'styled-components';
import {getDaysInMonth} from "../../views/CalendarViews/MonthView";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 15px;
  min-height: 192px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll}{
    gap: 12px;
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
  gap: 0 29.5px;
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
`

const DayWrapper = styled.div`
  position: relative;
  z-index: 1;
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
function CalendarComponent({date}: { date: Date }) {
    const today = useMemo(() => new Date(), []);

    const countDays = useMemo(() => getDaysInMonth(date.getFullYear(), date.getMonth() + 1), [])
    const firstDayId = useMemo(() => {
        const currentMonthDate = new Date(date.getFullYear(), date.getMonth(), 0)
        return currentMonthDate.getDay()
    }, [])

    return (
        <Wrapper>
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
                                    <Day isSelect={false} isToday={isToday} isHoliday={isHoliday}>{id + 1}</Day>
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