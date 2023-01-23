import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z" stroke="#F8C237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 10H22" stroke="#F8C237" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;