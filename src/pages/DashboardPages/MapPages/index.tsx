import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {YMaps, Map, ZoomControl, GeolocationControl, Placemark, Clusterer} from "react-yandex-maps";
import styled from "styled-components";
import MapPage from './MapPage';
import CreateBranch from "./CreateBranch";

const MapStyled = styled(Map)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`

function Index() {

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
            <Routes>
                <Route path='/' element={<MapPage/>}/>
                <Route path='/create' element={<CreateBranch/>}/>
            </Routes>
        </>
    );
}

export default Index;