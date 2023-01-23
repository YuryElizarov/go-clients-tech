import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M21 3H3V10H21V3Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14H16V21H21V14Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14H3V21H12V14Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;