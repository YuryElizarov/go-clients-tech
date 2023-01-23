import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M11.332 1.33334H4.66536C3.92898 1.33334 3.33203 1.9303 3.33203 2.66668V13.3333C3.33203 14.0697 3.92898 14.6667 4.66536 14.6667H11.332C12.0684 14.6667 12.6654 14.0697 12.6654 13.3333V2.66668C12.6654 1.9303 12.0684 1.33334 11.332 1.33334Z" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H8.00667" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;