import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M3 3V21H21" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9L14 14L10 10L7 13" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;