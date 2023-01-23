import React from 'react';
import styled from "styled-components";
import smartphone from '../../assets/images/smartphone.png';

const Smartphone = styled.div`
  background-image: url(${smartphone});
  background-position: top center;
  background-repeat: no-repeat;
  width: 340px;
  height: 688px;
  position: relative;
`

const SmsBlock = styled.div`
  width: 220px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  position: absolute;
  top: 73px;
  left: 41px;
`

const SmsCloud = styled.div`
  background: ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 16.7144px 16.7144px 16.7144px 0;
  padding: 10px 12px;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
    padding: 8px 10px;
  }
`

const DateText = styled.p`
  font-weight: 400;
  font-size: 8.91432px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 8px;
  }
`

function SmsComponent() {
    return (
        <Smartphone>
            <SmsBlock>
                <SmsCloud>Hi, Alex, i am with the team at Dentist Clinic on Chaikovskogo st. 48 office! Прежде всего,
                    хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за профессионализм, спокойствие,
                    чуткий подход к детям. </SmsCloud>
                <DateText>7 августа 2022 в 20:32</DateText>
            </SmsBlock>
        </Smartphone>
    );
}

export default SmsComponent;