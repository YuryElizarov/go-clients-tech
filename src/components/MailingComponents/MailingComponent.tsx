import React, {useState} from 'react';
import styled from "styled-components";
import {CheckBox} from "../../UI/Input";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 25px 20px;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 20px 16px;
    gap: 20px;
  }
`

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.gray};
  flex: 1;
  text-align: right;
  &:nth-child(2) {
    color: ${({theme}) => theme.colors.black};
    text-align: left;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function MailingComponent() {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    return (
        <Wrapper>
            <CheckBox value={isSelected} onChange={() => setIsSelected(!isSelected)}/>
            <Text>Alamin Uddin</Text>
            <Text>alamin@nexhealth.com</Text>
            <Text>+7 (999) 999 99-99</Text>
            <Text>145 years old</Text>
        </Wrapper>
    );
}

export default MailingComponent;