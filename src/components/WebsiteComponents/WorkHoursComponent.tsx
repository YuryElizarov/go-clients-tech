import React from 'react';
import styled from "styled-components";


const List = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  flex-direction: column;
`


const HourBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  span {
    color: ${({theme}) => theme.colors.black};
  }
`
function WorkHoursComponent() {
    return (
        <List>
            <HourBlock>Пн, Вт, Ср, Чт
                <span>07:00 - 15:00 РМ</span>
            </HourBlock>
            <HourBlock>Пятница
                <span>07:00 - 19:00 РМ</span>
            </HourBlock>
            <HourBlock>Суббота
                <span>14:00 - 15:00 РМ</span>
            </HourBlock>
        </List>
    );
}

export default WorkHoursComponent;