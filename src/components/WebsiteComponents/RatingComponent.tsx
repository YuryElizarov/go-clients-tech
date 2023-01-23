import React from 'react';
import styled from "styled-components";
import {ReitingIcon} from "../../UI/Svg";

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`

const Text = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
`

const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`
function RatingComponent() {
    return (
        <Rating>
            <Stars>
                <ReitingIcon/>
                <ReitingIcon/>
                <ReitingIcon/>
                <ReitingIcon/>
                <ReitingIcon/>
            </Stars>
            <Text>5.0 (32k)</Text>
        </Rating>
    );
}

export default RatingComponent;