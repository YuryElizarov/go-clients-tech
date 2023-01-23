import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40"  fill="none" {...props} >
            <path d="M6.66797 15H33.3346" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66797 25H33.3346" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6654 5L13.332 35" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.6654 5L23.332 35" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;