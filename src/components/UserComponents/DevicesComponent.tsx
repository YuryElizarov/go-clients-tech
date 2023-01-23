import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import androidImg from '../../assets/images/android.png'
import windowsImg from '../../assets/images/windows.png'


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  padding: 20px;
  align-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 10px;
  }
`

const DeviceBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  align-content: center;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
  }
`

const DeviceIcon = styled.img`
  width: 36px;
  height: 36px;
  ${({theme}) => theme.mediaQueries.ll} {
    width: 30px;
    height: 30px;
  }
`

const Title = styled(Heading)`
  font-size: 16px;
  line-height: 140%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 10px;
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

function DevicesComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <DeviceBlock>
                <DeviceIcon src={windowsImg}/>
                <Info>
                    <Title as='h3'>{t('user.person_data.devices.windows')}</Title>
                    <Text>Windows</Text>
                </Info>
            </DeviceBlock>
            <DeviceBlock>
                <DeviceIcon src={androidImg}/>
                <Info>
                    <Title as='h3'>{t('user.person_data.devices.android')}</Title>
                    <Text>Google Pixel 4a</Text>
                </Info>
            </DeviceBlock>
        </Wrapper>
    );
}

export default DevicesComponent;