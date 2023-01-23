import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <g clipPath="url(#)">
                <path d="M6.58675 6.58643C6.39025 6.76952 6.23265 6.99033 6.12334 7.23566C6.01402 7.48099 5.95524 7.74582 5.95051 8.01437C5.94577 8.28291 5.99517 8.54965 6.09576 8.79869C6.19635 9.04772 6.34607 9.27394 6.53598 9.46386C6.7259 9.65378 6.95212 9.8035 7.20116 9.90409C7.45019 10.0047 7.71694 10.0541 7.98548 10.0493C8.25402 10.0446 8.51885 9.98582 8.76419 9.87651C9.00952 9.7672 9.23032 9.60959 9.41342 9.41309" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.15332 3.38683C7.43419 3.35184 7.71694 3.33402 7.99999 3.3335C12.6667 3.3335 14.6667 8.00016 14.6667 8.00016C14.3686 8.63825 13.9948 9.23812 13.5533 9.78683" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.40634 4.40674C3.08051 5.30982 2.01959 6.55024 1.33301 8.00007C1.33301 8.00007 3.33301 12.6667 7.99967 12.6667C9.27695 12.6702 10.5269 12.2968 11.593 11.5934" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.33301 1.3335L14.6663 14.6668" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    );

export default Icon;