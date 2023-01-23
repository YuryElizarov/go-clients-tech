import React, {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
            <path d="M19.9998 16V6C19.9998 5.46957 19.7891 4.96086 19.414 4.58579C19.0389 4.21071 18.5302 4 17.9998 4H5.99978C5.46934 4 4.96064 4.21071 4.58556 4.58579C4.21049 4.96086 3.99978 5.46957 3.99978 6V16M19.9998 16H3.99978M19.9998 16L21.2798 18.55C21.3569 18.703 21.3934 18.8732 21.3858 19.0444C21.3782 19.2155 21.3267 19.3818 21.2364 19.5274C21.1461 19.6729 21.0198 19.7928 20.8698 19.8756C20.7198 19.9584 20.5511 20.0012 20.3798 20H3.61978C3.44847 20.0012 3.27972 19.9584 3.12972 19.8756C2.97972 19.7928 2.8535 19.6729 2.76315 19.5274C2.67281 19.3818 2.62137 19.2155 2.61378 19.0444C2.60618 18.8732 2.64268 18.703 2.71978 18.55L3.99978 16" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );

export default Icon;