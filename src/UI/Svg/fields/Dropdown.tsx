import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40"  fill="none" {...props} >
            <path d="M5 13.3335L11.6667 20.0002L5 26.6668" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M34.9987 20H18.332" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M34.9987 10H18.332" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M34.9987 30H18.332" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;