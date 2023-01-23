import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M21 4H14" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4H3" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12H12" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H3" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 20H16" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20H3" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V6" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10V14" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 18V22" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;