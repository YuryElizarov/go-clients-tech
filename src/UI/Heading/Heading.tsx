import styled from "styled-components";
import {HeadingTypes} from "./types";

const Heading = styled.h1<HeadingTypes>`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.black};
  margin: 0;
`

export default Heading;