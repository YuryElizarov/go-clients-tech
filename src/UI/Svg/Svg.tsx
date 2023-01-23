import React, { FunctionComponent } from 'react';
import {SvgProps} from "./types";

interface OwnProps extends SvgProps{}

type Props = OwnProps;

const defaultProps: Props = {
    height: "31px",
    xmlns: "http://www.w3.org/2000/svg",
}

const Svg: FunctionComponent<Props> = ({width, height, xmlns, viewBox, fill, children}) => (
      <svg width={width} height={height} xmlns={xmlns} viewBox={viewBox} fill={fill} >
          {children}
      </svg>
  );

Svg.defaultProps = defaultProps;

export default Svg;
