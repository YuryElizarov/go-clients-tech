import React, {useEffect, useRef, useState} from 'react';
import styled, {useTheme} from "styled-components";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {InputProps} from "./types";

const InputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`
const Label = styled.label`
  color: ${({theme}) => theme.colors.grayC4};
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  z-index: 2;
`

function Input({onChange, value, label}: InputProps) {
    const {colors} = useTheme()
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const wrapper = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isFocused && value) {
            setIsFocused(!!value)
        }
    }, [value, isFocused])

    return (
        <InputBlock ref={wrapper}>
            {label && <Label>{label}</Label>}
            <PhoneInput
                country="ru"
                value={value}
                onChange={phone => onChange(phone)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                inputStyle={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '140%',
                    color: colors.black,
                    borderBottom: `1px solid ${colors.borderInputDefault}`,
                    padding: `16px 0 12px 26px`,
                    borderRadius: 0,
                    height: `100%`,
                }}
                buttonClass='phone-button'
            />
        </InputBlock>
    );
}

export default Input;