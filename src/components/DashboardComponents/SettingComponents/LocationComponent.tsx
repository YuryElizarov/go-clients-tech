import React from 'react';
import {Wrapper} from "./styled";
import {MapIcon} from "../../../UI/Svg";

function LocationComponent() {
    return (
        <Wrapper>
            <MapIcon/>
            г. Москва
        </Wrapper>
    );
}

export default LocationComponent;