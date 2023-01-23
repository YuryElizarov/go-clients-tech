import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 8px 10px;
  gap: 7px;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.green};
`

const LoadBlock = styled.div`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    margin: 2px;
    border: 1px solid ${({theme}) => theme.colors.green};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({theme}) => theme.colors.green} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }


  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loading({title}:{title: string}) {
    return (
        <Wrapper>
            <LoadBlock>
                <div/>
                <div/>
                <div/>
            </LoadBlock>
            {title}
        </Wrapper>
    );
}

export default Loading;