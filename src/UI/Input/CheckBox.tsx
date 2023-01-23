import React from 'react';
import styled from "styled-components";
import {CheckBoxProps} from "./types";
import {CheckIcon} from "../Svg";

const CheckBoxStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
`

const Label = styled.label<{isChecked: boolean}>`
  display: flex;
  width: 20px;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 20px;
  background: ${({theme, isChecked}) => theme.colors[isChecked ? 'green' : 'white']};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  cursor: pointer;
  svg path {
    stroke: ${({theme}) => theme.colors.white};
  }
`

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  margin: 0;
  cursor: pointer;
`

function CheckBox({value, onChange, id, label}: CheckBoxProps) {
    return (
        <CheckBoxStyled>
            <Input type="checkbox" checked={value} onChange={() => onChange()} id={id}/>
            <Label htmlFor={id} isChecked={value}>
                <CheckIcon width={14} height={14}/>
            </Label>
            {label && <Text onClick={onChange}>{label}</Text>}
        </CheckBoxStyled>
    );
}

export default CheckBox;