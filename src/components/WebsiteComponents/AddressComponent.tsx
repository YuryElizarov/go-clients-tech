import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {Heading} from "../../UI/Heading";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 160%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    font-size: 12px;
  }
`

const MapStyled = styled(Map)`
  width: 100%;
  height: 220px;
`
function AddressComponent({buttonName, onClick, buttonVariant}: {buttonName: string, onClick: () => void, buttonVariant: EButtonVariants}) {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <YMaps>
                <MapStyled
                    defaultState={{center: [55.75, 37.57], zoom: 18}}
                    modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                >
                    <Placemark
                        geometry={[55.75, 37.57]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '/images/pin.svg',
                        }}
                    />
                </MapStyled>
            </YMaps>
            <Content>
                <Desc>
                    <Title>Москва, Метелева 16</Title>
                    <Text>+7 (999) 999 99-99</Text>
                    <Text>example@mail.com</Text>
                </Desc>
                <ButtonStyled onClick={onClick} variant={buttonVariant}>{t(buttonName)}</ButtonStyled>
            </Content>
        </Wrapper>
    );
}

export default AddressComponent;