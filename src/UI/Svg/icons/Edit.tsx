import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <g clipPath="url(#)">
                <path d="M12 1.33333L14.6667 3.99999" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.99967 13.6667L12.6663 5.99999L9.99967 3.33333L2.33301 11L1.33301 14.6667L4.99967 13.6667Z" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    );

export default Icon;