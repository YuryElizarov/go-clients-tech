import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40"  fill="none" {...props} >
            <path d="M6.66797 11.6665V6.6665H33.3346V11.6665" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 33.3335H25" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 6.6665V33.3332" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;