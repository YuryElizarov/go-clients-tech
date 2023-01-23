import React from 'react';
import styled from "styled-components";
import {Clusterer, GeolocationControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import {BookingFormView} from "../../views/WebsiteViews";

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  gap: 22px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 26px;
  }
`
const MapStyled = styled(Map)`
  width: 100%;
  height: 520px;
`
function BookingPage() {
    return (
        <>
            <YMaps>
                <MapStyled
                    defaultState={{center: [55.75, 37.57], zoom: 18}}
                    modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                >
                    <GeolocationControl options={{
                        position: {
                            top: 'unset',
                            bottom: 206 + 50 + 20,
                            right: 56
                        }
                    }}/>
                    <ZoomControl options={{
                        position: {
                            top: 'unset',
                            bottom: '50px',
                            right: 56
                        }
                    }}/>
                    <Clusterer options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false
                    }}>
                        <Placemark
                            geometry={[55.75, 37.57]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: '/images/pin.svg',
                            }}
                        />
                    </Clusterer>
                </MapStyled>
            </YMaps>
            <Content>
                <BookingFormView/>
            </Content>
        </>
    );
}

export default BookingPage;