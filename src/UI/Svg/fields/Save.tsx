import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40"  fill="none" {...props} >
            <path d="M32.1667 35H8.83333C7.94928 35 7.10143 34.6488 6.47631 34.0237C5.85119 33.3986 5.5 32.5507 5.5 31.6667V8.33333C5.5 7.44928 5.85119 6.60143 6.47631 5.97631C7.10143 5.35119 7.94928 5 8.83333 5H27.1667L35.5 13.3333V31.6667C35.5 32.5507 35.1488 33.3986 34.5237 34.0237C33.8986 34.6488 33.0507 35 32.1667 35Z" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.8346 35.0001V21.6667H12.168V35.0001" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.168 5V13.3333H25.5013" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;