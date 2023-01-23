import React from 'react';
import styled from "styled-components";

const ToggleStyled = styled.div<{ isActive: boolean }>`
  box-sizing: border-box;
  position: relative;
  min-width: 49px;
  display: flex;
  align-content: center;
  align-items: center;
  //justify-content: ${({isActive}) => isActive ? 'flex-end' : 'flex-start'};
  background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4'] };
  cursor: pointer;
  border-radius: 48px;
  padding: 4px;
  gap: 10px;
  width: 48px;
  height: 24px;

  div {
    position: absolute;
    transition: all .25s ease;
    top: 50%;
    left: ${({isActive}) => isActive ? 'calc(100% - 20px)' : '4px'};
    transform: translateY(-50%);
    background: ${({theme}) => theme.colors.background};
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
`

function Toggle({isActive, onToggle}: { isActive: boolean, onToggle: () => void }) {
    return (
        <ToggleStyled isActive={isActive} onClick={onToggle}>
            <div />
        </ToggleStyled>
    );
}

export default Toggle;