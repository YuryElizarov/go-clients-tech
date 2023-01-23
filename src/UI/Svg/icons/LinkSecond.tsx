import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M5.9987 11.3334H4.66536C3.78131 11.3334 2.93346 10.9822 2.30834 10.3571C1.68322 9.73198 1.33203 8.88414 1.33203 8.00008C1.33203 7.11603 1.68322 6.26818 2.30834 5.64306C2.93346 5.01794 3.78131 4.66675 4.66536 4.66675H5.9987" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.66675H11.3333C12.2174 4.66675 13.0652 5.01794 13.6904 5.64306C14.3155 6.26818 14.6667 7.11603 14.6667 8.00008C14.6667 8.88414 14.3155 9.73198 13.6904 10.3571C13.0652 10.9822 12.2174 11.3334 11.3333 11.3334H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.33203 8H10.6654" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;