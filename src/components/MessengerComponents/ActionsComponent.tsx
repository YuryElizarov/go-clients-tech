import React from 'react';
import styled from "styled-components";
import {MoreIcon, SearchIcon} from "../../UI/Svg";

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Action = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
  svg path {
    stroke: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

function ActionsComponent() {
    return (

        <Actions>
            <Action><SearchIcon/></Action>
            <Action><MoreIcon/></Action>
        </Actions>
    );
}

export default ActionsComponent;