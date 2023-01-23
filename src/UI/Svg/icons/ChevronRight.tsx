import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M6 12L10 8L6 4" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;