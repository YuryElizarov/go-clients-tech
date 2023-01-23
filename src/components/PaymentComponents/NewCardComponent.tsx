import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {PlusIcon} from "../../UI/Svg";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 10px;
  gap: 8px;
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  background: ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.grayC4};
  svg {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
`
function NewCardComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <PlusIcon/>
            {t("payment.check.add")}
        </Wrapper>
    );
}

export default NewCardComponent;