import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#0BA495" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.0004 21L16.6504 16.65" stroke="#0BA495" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;