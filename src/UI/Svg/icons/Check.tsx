import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M20 6L9 17L4 12" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;