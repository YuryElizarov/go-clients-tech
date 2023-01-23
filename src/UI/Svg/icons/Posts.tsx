import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" {...props} >
            <path d="M5 41C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V19C1 16.8 2.8 15 5 15H9M5 41H37C38.0609 41 39.0783 40.5786 39.8284 39.8284C40.5786 39.0783 41 38.0609 41 37V5C41 3.93913 40.5786 2.92172 39.8284 2.17157C39.0783 1.42143 38.0609 1 37 1H13C11.9391 1 10.9217 1.42143 10.1716 2.17157C9.42143 2.92172 9 3.93913 9 5V37C9 38.0609 8.57857 39.0783 7.82843 39.8284C7.07828 40.5786 6.06087 41 5 41Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;