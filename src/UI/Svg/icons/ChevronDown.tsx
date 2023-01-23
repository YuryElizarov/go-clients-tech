import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" {...props} >
            <path d="M6 3L4 5L2 3" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;