import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M12 4L4 12" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L12 12" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;