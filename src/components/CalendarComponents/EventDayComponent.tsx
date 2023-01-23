import React, {useMemo} from 'react';
import styled from "styled-components";
import {DeleteIcon, EditIcon} from "../../UI/Svg";
import {EPriorityEvent, ICalendarEvent} from "../../types";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

export const variants: {[priority in EPriorityEvent]: {background: string, date: string}} = {
    [EPriorityEvent.Low]: {
        background: '#F8F8F8',
        date: '#A5A5A5'
    },
    [EPriorityEvent.Normal]: {
        background: '#E7F6F5',
        date: '#0BA495'
    },
    [EPriorityEvent.Warning]: {
        background: 'rgba(255, 184, 0, 0.1);',
        date: '#FFB800;'
    },
    [EPriorityEvent.High]: {
        background: '#dababa',
        date: '#E26161'
    },
}

const Wrapper = styled.div<{priority: EPriorityEvent, posTop: number, posBottom: number, isWeek?: boolean}>`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: ${({posTop}) => posTop}%;
  bottom: ${({posBottom}) => 100 - posBottom}%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  padding: ${({isWeek}) => isWeek ? '9px 10px' : `20px 10px`};
  z-index: 2;
  overflow: auto;
  background: ${({priority}) => variants[priority].background};
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
    padding: ${({isWeek}) => isWeek ? '7px 8px' : `16px 8px`};
  }
`

const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  svg {
    width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 30px;
    height: 30px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Date = styled.div<{priority: EPriorityEvent}>`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: ${({priority}) => variants[priority].date};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 10px;
  }
`

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`


const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.grayC4};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const renderTime = (date: Date) => `${date.getHours()}:${date.getMinutes()}`

const getTime = (date: Date) => {
    const countHours = date.getHours()
    const countMinutes = date.getMinutes()
    const countSeconds = date.getSeconds()
    const allTime = 24 * 3600
    return ((countHours * 3600 + countMinutes * 60 + countSeconds) * 100) / allTime
}
function EventDayComponent({eventDay: {toDate, fromDate, priority, content, user}, isRenderAction = true}: {eventDay: ICalendarEvent, isRenderAction?: boolean}) {
    const [posTop, posBottom] = useMemo(() => [getTime(fromDate), getTime(toDate)], [fromDate, toDate]);
    const {onShowModal} = useAppAction()
    return (
        <Wrapper posTop={posTop} posBottom={posBottom} priority={priority} isWeek={!isRenderAction}>
            <Icon>
                <Image src='/images/account3.png'/>
            </Icon>
            <Desc>
                <Date priority={priority}>{renderTime(fromDate)}-{renderTime(toDate)}</Date>
                <Title>{user.name} {user.soname}</Title>
                {content && <Content>{content}</Content>}
            </Desc>
            {isRenderAction && <Actions>
                <ButtonIcon onClick={() => onShowModal(EModals.DeleteEvent)}><EditIcon/></ButtonIcon>
                <ButtonIcon onClick={() => onShowModal(EModals.DeleteEvent)}><DeleteIcon/></ButtonIcon>
            </Actions>}
        </Wrapper>
    );
}

export default EventDayComponent;