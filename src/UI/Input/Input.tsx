import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {InputProps} from "./types";

const InputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`

const InputStyled = styled.input<{ isFocused: boolean, isIconLeft: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  padding: ${({isFocused}) => isFocused ? '20px' : '15px'} 0 15px;
  
  ${({isIconLeft}) => isIconLeft ? 'padding-left: 32px;' : ''}
  &:focus {
    border-color: ${({theme}) => theme.colors.green};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.gray};
  }

  ${({theme}) => theme.mediaQueries.ll} {
    font-size: ${({isFocused}) => isFocused ? '10px' : '12px'};
  }
`
const Label = styled.label<{ isFocused: boolean }>`
  color: ${({isFocused, theme}) => theme.colors[isFocused ? 'grayC4' : 'gray']};
  position: absolute;
  top: ${({isFocused}) => isFocused ? '0' : '50%'};
  transform: translateY(-50%);
  left: 0;
  font-weight: 500;
  font-size: ${({isFocused}) => isFocused ? '12px' : '16px'};
  line-height: ${({isFocused}) => isFocused ? '100%' : '140%'};

  ${({theme}) => theme.mediaQueries.ll} {
    font-size: ${({isFocused}) => isFocused ? '10px' : '12px'};
  }
`

const IconBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`

function Input({onChange, label, id, value, iconLeft}: InputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const wrapper = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isFocused && value) {
            setIsFocused(!!value)
        }
    }, [value, isFocused])

    return (
        <InputBlock ref={wrapper}>
            <Label isFocused={isFocused} htmlFor={id}>{label}</Label>
            {(isFocused && iconLeft) && <IconBlock>{iconLeft}</IconBlock>}
            <InputStyled isFocused={isFocused}
                         isIconLeft={!!iconLeft}
                         type='text' id={id}
                         value={value}
                         onFocus={() => setIsFocused(true)}
                         onBlur={() => setIsFocused(false)}
                         onChange={event => onChange(event.target.value)}/>
        </InputBlock>
    );
}

export default Input;