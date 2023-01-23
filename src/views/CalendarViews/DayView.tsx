import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import {EventDayComponent} from '../../components/CalendarComponents';
import {ICalendarEvent} from "../../types";

enum EDay {
    Today,
    Holiday,
    Weekday
}

const variants: { [day in EDay]: string } = {
    [EDay.Holiday]: '#E26161',
    [EDay.Today]: '#0BA495',
    [EDay.Weekday]: '#3D3D3D',
}

const Wrapper = styled.div<{ isWeek?: boolean }>`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  gap: 0;
  border-radius: 0 0 10px 10px;
  ${({isWeek, theme}) => isWeek ? `border-right: 1px solid ${theme.colors.borderInputDefault};` : ''}
`

const TimeColumn = styled.div`
  min-width: 82px;
  border-right: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`

const ContentBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
const HeaderBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const HourText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.grayC4};
  position: absolute;
  top: 0;
  left: -17px;
  transform: translate(-100%, -50%);
`

const HourBlock = styled.div<{ isFirst: boolean, isLast: boolean }>`
  position: relative;
  width: 100%;
  min-height: 78px;
  background: ${({theme}) => theme.colors.background};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};

  ${({isFirst}) => isFirst ? `${HourText} {
      transform: translate(-100%, 0);
    }` : ''}

  ${({isLast}) => isLast ? `
  border-bottom: none;
    min-height: 0;
    ${HourText} {
      transform: translate(-100%, -100%);
    }` : ''}
`

const DayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Line = styled.div<{ position: number }>`
  position: absolute;
  left: -5.5px;
  top: ${({position}) => position}%;
  display: flex;
  transform: translateY(-50%);
  width: calc(100% + 5.5px);
  align-items: center;
  justify-content: flex-start;
  z-index: 3;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.red};
  }

  hr {
    border: none;
    margin: 0;
    height: 2px;
    flex: 1;
    background: ${({theme}) => theme.colors.red};
  }
`

const Title = styled(HourBlock)<{ day: EDay }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: ${({day}) => variants[day]};
  text-transform: capitalize;
`

const hours: string[] = [
    '00:00', '01:00',
    '02:00', '03:00',
    '04:00', '05:00',
    '06:00', '07:00',
    '08:00', '09:00',
    '10:00', '11:00',
    '12:00', '13:00',
    '14:00', '15:00',
    '16:00', '17:00',
    '18:00', '19:00',
    '20:00', '21:00',
    '22:00', '23:00',
    '00:00'
]

const getNowTime = () => {
    const now = new Date()
    const countHours = now.getHours()
    const countMinutes = now.getMinutes()
    const countSeconds = now.getSeconds()
    const allTime = 24 * 3600
    return ((countHours * 3600 + countMinutes * 60 + countSeconds) * 100) / allTime
}

function DayView({
                     isFirst = true,
                     isRenderTimeColum = true,
                     title,
                     date,
                     data
                 }: { data: ICalendarEvent[], date: Date, isFirst?: boolean, isRenderTimeColum?: boolean, title?: string }) {
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        setPosition(getNowTime())
        const interval = setInterval(() => {
            setPosition(getNowTime())
        }, 30000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const isToday = useMemo(() => {
        const now = new Date()
        return now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() && now.getDate() === date.getDate()
    }, [date]);
    const isWeek: boolean = useMemo(() => !!title, [title]);

    const isHoliday = useMemo(() => date.getDay() === 0 || date.getDay() === 6, [date]);
    return (
        <Wrapper isWeek={isWeek}>
            {isRenderTimeColum && <TimeColumn/>}
            <DayWrapper>
                {title && <HeaderBlock>
                    <Title isFirst isLast={false} day={
                        isToday ? EDay.Today : isHoliday ? EDay.Holiday : EDay.Weekday
                    }>
                        {title}
                    </Title>
                </HeaderBlock>}
                <ContentBlock>
                    {
                        isToday && <Line position={position}>
                            <span/>
                            <hr/>
                        </Line>
                    }
                    {
                        data.map((item, id) => <EventDayComponent isRenderAction={!isWeek} eventDay={item}
                                                                  key={`Event-${id}`}/>)
                    }
                    {
                        hours.map((hour, id) => <HourBlock isFirst={!title && id === 0} isLast={id === hours.length - 1}
                                                           key={id}>
                            {isFirst && <HourText>{hour}</HourText>}
                        </HourBlock>)
                    }
                </ContentBlock>
            </DayWrapper>
        </Wrapper>
    );
}

export default DayView;