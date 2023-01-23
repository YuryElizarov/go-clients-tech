import React from 'react';
import styled from "styled-components";
import {DoctorIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 4px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 40px;
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 10px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 56px;
  &:first-child {
    padding-right: 20px;
  }
`

const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.lightBiege};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  ${({theme}) => theme.mediaQueries.ll} {
    width: 40px;
    height: 40px;
  }
`

const Image = styled.img`
  width: auto;
  height: 100%;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
`

const Name = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Phone = styled.h4`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`
function ChatUserComponent() {
    return (
        <Wrapper>
            <Block>
                <Account>
                    <Image src="/images/account2.png"/>
                </Account>
                <InfoBlock>
                    <Name>Аверинов Дмитрий</Name>
                    <Phone>+7 (999) 999 99-99</Phone>
                </InfoBlock>
            </Block>
            <Block>
                <Account>
                    <DoctorIcon/>
                </Account>
            </Block>
        </Wrapper>
    );
}

export default ChatUserComponent;