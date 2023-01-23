import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <g clipPath="url(#)">
                <path d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666Z" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 4V8L10.6667 6.66667" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    );

export default Icon;