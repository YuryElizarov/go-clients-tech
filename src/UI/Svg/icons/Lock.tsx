import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props} >
            <path d="M12.6667 7.33331H3.33333C2.59695 7.33331 2 7.93027 2 8.66665V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V8.66665C14 7.93027 13.403 7.33331 12.6667 7.33331Z" stroke="#E26161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66602 7.33331V4.66665C4.66602 3.78259 5.01721 2.93475 5.64233 2.30962C6.26745 1.6845 7.11529 1.33331 7.99935 1.33331C8.8834 1.33331 9.73125 1.6845 10.3564 2.30962C10.9815 2.93475 11.3327 3.78259 11.3327 4.66665V7.33331" stroke="#E26161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;