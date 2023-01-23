import React, {useMemo} from 'react';
import styled from "styled-components";
import {EPriorityEvent, ICalendarEvent} from "../../types";
import {variants} from "./EventDayComponent";
import {CloseIcon} from "../../UI/Svg";

const Wrapper = styled.div<{ isPast: boolean }>`
  width: calc(100% / 7);
  height: 180px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-right: none;
  opacity: ${({isPast}) => isPast ? .6 : 1};

  &:nth-child(7n + 1) {
    border-left: none;
  }

  &:last-child {
    border-right: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    padding: 16px;
  }
`

const Title = styled.h4`
  margin: 0;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  text-transform: capitalize;
  line-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const Item = styled.div<{ priority: EPriorityEvent }>`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  color: ${({priority}) => variants[priority].date};

  span {
    width: 8px;
    height: 8px;
    display: flex;
    border-radius: 50%;
    background: ${({priority}) => variants[priority].date};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 6px;
    svg {
      width: 6px;
      height: 6px;  
    }
  }
`

const User = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const MoreBlock = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }

`

export const getFormatEventTime = (date: Date) => {
    const hours = new Intl.DateTimeFormat('ru', {hour: 'numeric', minute: '2-digit', hour12: true}).format(date);
    return `${hours}`
}

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  align-content: center;
  background: none;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.grayC4};
    }
  }
`


function MonthDayComponent({
                               title,
                               data,
                               isPast,
                               onClose,
                               ...props
                           }: { title: string, isPast: boolean, data: ICalendarEvent[], onClose?: () => void }) {

    const isOverflow = useMemo(() => data.length > 4, [])

    const dataSort = useMemo(() => data.sort((a, b) => a.fromDate.getTime() - b.fromDate.getTime()), [data])

    const dataSlice = useMemo(() => isOverflow ? dataSort.slice(0, 3) : dataSort, [dataSort, data])

    return (
        <Wrapper isPast={isPast} {...props}>
            <Title>
                {title}
                {onClose && <CloseButton onClick={onClose}>
                    <CloseIcon/>
                </CloseButton>}
            </Title>
            <List>
                {
                    dataSlice.map((item, id) => (
                        <Item key={id} priority={item.priority}>
                            <span/>
                            {getFormatEventTime(item.fromDate)}
                            <User>{item.user.name} {item.user.soname}</User>
                        </Item>
                    ))
                }
                {isOverflow && <MoreBlock>
                    Еще {data.length - 3}
                </MoreBlock>}
            </List>
        </Wrapper>
    );
}

export default MonthDayComponent;