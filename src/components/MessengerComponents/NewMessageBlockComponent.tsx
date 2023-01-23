import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  border: 1px solid ${({theme}) => theme.colors.grayC4};
  border-radius: 56px;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const Line = styled.hr`
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  flex: 1;
`

function NewMessageBlockComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Line/>
            <Text>{t('messenger.new')}</Text>
            <Line/>
        </Wrapper>
    );
}

export default NewMessageBlockComponent;