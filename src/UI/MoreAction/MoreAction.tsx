import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {MoreVerticalIcon} from "../Svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`

const MenuAction = styled.div<{isShowMenu: boolean}>`
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  z-index: 1;
  visibility: ${({isShowMenu}) => isShowMenu ? "visible": 'hidden'};
  opacity: ${({isShowMenu}) => isShowMenu ? "1": '0'};
`

const ActionItem = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 10px;
  gap: 8px;
  background: ${({theme}) => theme.colors.background};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  svg {
    width: 12px;
    height: 12px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
      stroke-width: 2;
    }
  }
  &:hover {
    background: ${({theme}) => theme.colors.greenHover};
    color: ${({theme}) => theme.colors.green};
    svg path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }

`

function MoreAction({actions}:{actions: {title: string | ReactNode, callback: () => void}[]}) {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const dropdown = useRef<HTMLDivElement>(null)

    const handleClickOutside = useCallback((e: any) => {
        if (!e.path.includes(dropdown.current)) {
            setIsShowMenu(false)
        }
    }, [dropdown])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        }
    }, [handleClickOutside])
    return (
        <Wrapper ref={dropdown} >
            <ButtonIcon onClick={() => setIsShowMenu(true)}>
                <MoreVerticalIcon />
            </ButtonIcon>
            <MenuAction isShowMenu={isShowMenu}>
                {
                    actions.map((action, id) => <ActionItem key={id} onClick={action.callback}>{action.title}</ActionItem>)
                }
            </MenuAction>
        </Wrapper>
    );
}

export default MoreAction;