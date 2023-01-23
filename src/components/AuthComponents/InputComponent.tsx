import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {FieldError} from "react-hook-form";
import {CheckIcon, EyeIcon} from "../../UI/Svg";

// import {FieldValues, UseFormRegister} from "react-hook-form";

interface InputProps {
    children?: ReactNode,
    placeholder: string,
    val: string,
    inputType: string,
    errorMessage?: FieldError,
    register: any
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`
const InputBlock = styled.div`
  position: relative;
  width: 100%;
`

const ErrorMessage = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${({theme}) => theme.colors.red};
  position: absolute;
  top: 0;
  left: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const InputStyled = styled.input<{isError: boolean}>`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  padding: 32px 0;
  border-bottom: 1px solid ${({theme, isError}) => theme.colors[isError ? 'red' : 'borderInputDefault']};

  &:focus {
    border-color: ${({theme, isError}) => theme.colors[isError ? 'red' : 'green']};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 26px 0;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`

const IconPassword = styled(IconWrapper)<{isShow: boolean}>`
  cursor: pointer;
    svg path {
      stroke: ${({theme, isShow}) => theme.colors[isShow ? 'green' : 'gray']};
    }
`

function InputComponent({
                            children, val, placeholder,
                            errorMessage, register, inputType
                        }: InputProps) {

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    return (
        <InputWrapper>
            <InputBlock>
                {errorMessage && <ErrorMessage>{errorMessage.message}</ErrorMessage>}
                <InputStyled {...register} isError={!!errorMessage} type={isShowPassword ? 'text' : inputType} placeholder={placeholder}/>
                {
                    inputType === 'email' ?
                        val && val !== '' && !errorMessage && <IconWrapper>
                            <CheckIcon/>
                        </IconWrapper>
                        : inputType === 'password' && <IconPassword isShow={isShowPassword} onClick={() => setIsShowPassword(!isShowPassword)}>
                            <EyeIcon/>
                        </IconPassword>
                }
            </InputBlock>
            {
                children
            }
        </InputWrapper>
    );
}

export default InputComponent;