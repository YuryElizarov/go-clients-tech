import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M17 11L21 7L17 3" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 7H9" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 21L3 17L7 13" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 17H3" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;