import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="40" height="40" viewBox="0 0 40 40"  fill="none" {...props} >
            <path d="M19.9987 36.6668C29.2034 36.6668 36.6654 29.2049 36.6654 20.0002C36.6654 10.7954 29.2034 3.3335 19.9987 3.3335C10.794 3.3335 3.33203 10.7954 3.33203 20.0002C3.33203 29.2049 10.794 36.6668 19.9987 36.6668Z" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.9987 21.6668C20.9192 21.6668 21.6654 20.9206 21.6654 20.0002C21.6654 19.0797 20.9192 18.3335 19.9987 18.3335C19.0782 18.3335 18.332 19.0797 18.332 20.0002C18.332 20.9206 19.0782 21.6668 19.9987 21.6668Z" stroke="#C4C4C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;