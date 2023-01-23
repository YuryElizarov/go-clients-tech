import React, {ReactNode, useMemo} from 'react';
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

interface MenuItemProps {
    link: string,
    tip: string,
    icon: ReactNode
}


const Tip = styled.div`
  position: absolute;
  padding: 6px 8px;
  gap: 10px;
  display: flex;
  visibility: hidden;
  opacity: 0;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.green};
  top: 50%;
  right: 30px;
  transform: translate(100%, -50%);
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.white};
  white-space: nowrap;


  span {
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: 1px;
    border: 8px solid transparent;
    border-right: 6px solid ${({theme}) => theme.colors.green};
    border-radius: 4px;
    display: flex;
  }
`

const MenuItem = styled(Link)<{ isActive: boolean, isDisabled?: boolean }>`
  position: relative;
  display: flex;
  padding: 16px 40px;
  gap: 10px;
  background: ${({
                   theme,
                   isActive
                 }) => isActive ? 'linear-gradient(91.55deg, rgba(11, 164, 149, 0.05) 0%, rgba(11, 164, 149, 0) 100%)' : theme.colors.white};;
  border-left: 2px solid ${({theme}) => theme.colors.green};
  border-color: ${({theme, isActive}) => theme.colors[isActive ? 'green' : "white"]};

  svg path {
    stroke: ${({theme, isActive}) => theme.colors[isActive ? 'green' : "gray"]};
  }

  opacity: ${({isDisabled}) => isDisabled ? .5 : 1};

  ${({isDisabled}) => isDisabled ? 'pointer-events: none;' : ''}
  &:hover {
    ${Tip} {
      opacity: 1;
      visibility: visible;
    }

    svg path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 40px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`

function MenuItemComponent({link, tip, icon}: MenuItemProps) {
    const {pathname} = useLocation()
    const basePathname = useMemo(() => `/${pathname.split('/')[1] || ''}`, [pathname]);
    return (
        <MenuItem to={link} isActive={basePathname === link}>
            {icon}
            <Tip><span/>{tip}</Tip>
        </MenuItem>
    );
}

export default MenuItemComponent;