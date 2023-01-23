import React, {ReactNode} from 'react';
import styled from "styled-components";

interface RowItemProps {
    item: string | ReactNode
    isSelected: boolean;
    isActive: boolean;
    value: string | number;
    onSelect?: (value: string | number) => void;
    onShow?: () => void,
}

const RowItemStyled = styled.div<{ isActive: boolean, isSelected: boolean }>`
  font-style: normal;
  padding: 7px 14px;
  font-weight: 500;
  min-width: max-content;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme, isActive, isSelected}) => theme.colors[isActive || isSelected ? 'green' : 'black']};
  cursor: pointer;
  &:hover {
    background-color: #E7F6F5;
    color: ${({theme}) => theme.colors.green};
  }
`

function RowItem({item, value, onSelect, isSelected, isActive, onShow}: RowItemProps) {

    return (
        <RowItemStyled isActive={isActive} isSelected={isSelected}
                       onClick={() => {
                           if (onSelect && (!isSelected)) {
                               onSelect(value)
                           } else if (onShow) {
                               onShow()
                           }
                       }}>
            {item}
        </RowItemStyled>
    );
}

export default RowItem;