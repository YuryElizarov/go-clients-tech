import styled from "styled-components";
import {ButtonProps} from "./types";


const Button = styled.button<ButtonProps>`
  font-style: normal;
  text-align: center;
  border: none;
  display: flex;
  align-items: center;
  transition: all .25s ease;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  max-width: 320px;
  padding: 16px 60px;
  gap: 10px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  outline: ${({theme, variant}) => theme.buttons[variant].border};
  background: ${({theme, variant}) => theme.buttons[variant].background};
  color: ${({theme, variant}) => theme.buttons[variant].color};
  svg path {
    stroke: ${({theme, variant}) => theme.buttons[variant].color};
  }
  &:not(:disabled):hover {
    background: ${({theme, variant}) => theme.buttons[variant].backgroundHover};
    color: ${({theme, variant}) => theme.buttons[variant].colorHover};
    outline: ${({theme, variant}) => theme.buttons[variant].borderHover};
    svg path {
      stroke: ${({theme, variant}) => theme.buttons[variant].colorHover};
    }
  }
  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`;

export default Button
