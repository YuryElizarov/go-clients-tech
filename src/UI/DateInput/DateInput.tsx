import React, {forwardRef, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import {DateInputProps} from "./types";
import {ChevronDownIcon} from "../Svg";

const InputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`

const InputStyled = styled.div<{ isFocused: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  min-height: 53px;
  line-height: 140%;
  color: ${({theme,isFocused}) => theme.colors[isFocused ?'black' : 'gray']};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  padding: ${({isFocused}) => isFocused ? '20px' : '15px'} 0 15px;

  &:focus {
    border-color: ${({theme}) => theme.colors.green};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: ${({isFocused}) => isFocused ? '17px' : '12px'} 0 12px;
    font-size: 12px;
    min-height: 43px;
  }
`
const Label = styled.div<{ isFocused: boolean }>`
  color: ${({isFocused, theme}) => theme.colors[isFocused ? 'grayC4' : 'gray']};
  position: absolute;
  top: ${({isFocused}) => isFocused ? '0' : '50%'};
  transform: translateY(-50%);
  left: 0;
  font-weight: 500;
  font-size: ${({isFocused}) => isFocused ? '12px' : '16px'};
  line-height: ${({isFocused}) => isFocused ? '100%' : '140%'};
`


const IconStyled = styled.div`
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`

const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
        <InputStyled isFocused={!!value} onClick={onClick} ref={ref}>
            {value || placeholder || ''}
        </InputStyled>
    ))

function DateInput({onChange, label, value, placeholder}: DateInputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const wrapper = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isFocused && value) {
            setIsFocused(!!value)
        }
    }, [value, isFocused])

    return (
        <InputBlock ref={wrapper} onClick={() => setIsFocused(false)}>
            {!(!isFocused && placeholder) && <Label isFocused={isFocused}>{label}</Label>}
            <DatePicker
                selected={value}
                onChange={(date) => onChange(date)}
                placeholderText={placeholder}
                customInput={<CustomInput/>}
                dateFormat="dd MMM yyyy"
            />
            <IconStyled>
                <ChevronDownIcon/>
            </IconStyled>
        </InputBlock>
    );
}

export default DateInput;