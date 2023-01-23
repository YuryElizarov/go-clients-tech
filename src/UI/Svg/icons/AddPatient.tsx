import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props} >
            <path d="M26.6673 35V31.6667C26.6673 29.8986 25.9649 28.2029 24.7147 26.9526C23.4645 25.7024 21.7688 25 20.0007 25H10.0007C8.23254 25 6.53685 25.7024 5.28661 26.9526C4.03636 28.2029 3.33398 29.8986 3.33398 31.6667V35" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.0007 18.3333C18.6825 18.3333 21.6673 15.3486 21.6673 11.6667C21.6673 7.98477 18.6825 5 15.0007 5C11.3188 5 8.33398 7.98477 8.33398 11.6667C8.33398 15.3486 11.3188 18.3333 15.0007 18.3333Z" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.666 13.3333V23.3333" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36.666 18.3333H26.666" stroke="#0BA495" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;