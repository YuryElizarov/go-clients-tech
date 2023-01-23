import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props} >
            <path d="M20.7998 9H11.7998C10.6952 9 9.7998 9.89543 9.7998 11V20C9.7998 21.1046 10.6952 22 11.7998 22H20.7998C21.9044 22 22.7998 21.1046 22.7998 20V11C22.7998 9.89543 21.9044 9 20.7998 9Z" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.7998 15H4.7998C4.26937 15 3.76066 14.7893 3.38559 14.4142C3.01052 14.0391 2.7998 13.5304 2.7998 13V4C2.7998 3.46957 3.01052 2.96086 3.38559 2.58579C3.76066 2.21071 4.26937 2 4.7998 2H13.7998C14.3302 2 14.8389 2.21071 15.214 2.58579C15.5891 2.96086 15.7998 3.46957 15.7998 4V5" stroke="#0BA495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;