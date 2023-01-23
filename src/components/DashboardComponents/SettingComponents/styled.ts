import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div<{isActive?: boolean}>`
  padding: 8px;
  gap: 6px;
  background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'background']};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  svg path {
    stroke: ${({theme, isActive}) => theme.colors[isActive ? 'white' : 'black']};
  }
  &:first-child {
    svg path {
      stroke: ${({theme}) => theme.colors.green};
    } 
  }
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

export const Tag = styled.div`
  display: flex;
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  top: 8px;
  right: 8px;
  background: ${({theme}) => theme.colors.red};
  border: 2px solid ${({theme}) => theme.colors.background};
`