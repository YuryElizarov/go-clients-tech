import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M3 11L21 6V18L3 14V11Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6002 16.8002C11.4952 17.181 11.3161 17.5374 11.0733 17.8491C10.8305 18.1607 10.5287 18.4215 10.1851 18.6165C9.84156 18.8115 9.46294 18.9369 9.0709 18.9856C8.67885 19.0343 8.28105 19.0053 7.90022 18.9002C7.51938 18.7951 7.16297 18.6161 6.85133 18.3733C6.53969 18.1305 6.27892 17.8287 6.08392 17.4851C5.88892 17.1415 5.7635 16.7629 5.71482 16.3709C5.66614 15.9788 5.69516 15.581 5.80022 15.2002" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;