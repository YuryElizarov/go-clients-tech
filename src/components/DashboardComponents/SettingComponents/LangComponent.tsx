import React from 'react';
import styled from "styled-components";
import {Wrapper} from "./styled";
import {RussiaIcon} from "../../../UI/Svg";

const WrapperStyled = styled(Wrapper)`
  svg {
    path {
      stroke: none;
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

function LangComponent() {
    return (
        <WrapperStyled>
            <RussiaIcon/>
        </WrapperStyled>
    );
}

export default LangComponent;