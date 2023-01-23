import React from 'react';
import styled from "styled-components";
import {CheckBox} from "../Input";

interface RowItemProps {
    item: string
    isSelected: boolean;
    isActive: boolean;
    value: string;
    onSelect?: (value: string) => void;
    onShow?: () => void,
}

const RowItemStyled = styled.div<{ isActive: boolean, isSelected: boolean }>`
  font-style: normal;
  padding: 7px 14px;
  font-weight: 500;
  min-width: max-content;
  display: flex;
  width: 100%;
  justify-content: space-between;
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
                           if (onSelect) {
                               onSelect(value)
                           } else if (onShow) {
                               onShow()
                           }
                       }}>
            {item}
            <CheckBox value={isSelected} onChange={() => {}} id={String(value)}/>
        </RowItemStyled>
    );
}

export default RowItem;