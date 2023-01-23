import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M3.33301 8H12.6663" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12.6665V3.33317" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;