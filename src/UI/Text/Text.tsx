import styled from "styled-components";
import {TextTypes} from "./types";

const Text = styled.p<TextTypes>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: left;
  margin: 0;
  padding: 0;
  color: ${({theme}) => theme.colors.darkGrey};
`

export default Text;