import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styled from "styled-components";
import RowItem from './RowItem';
import {ChevronDownIcon} from "../Svg";


interface DropdownProps {
    value: string | number,
    placeholder: string | null,
    onSelect: (val: any) => void,
    options: Array<{ item: string | ReactNode, value: string | number }>,
    label: string,
    isShowOnlyPlaceholder?: boolean
}

const DropdownStyled = styled.div`
  position: relative;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 180px;
  ${({theme}) => theme.mediaQueries.ll} {
    min-width: 160px;
  }
`

const LabelStyled = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.black};
  margin-right: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 11px;
    line-height: 15px;
    margin-right: 6px;
  }
`
const RowStyled = styled.div<{showMenu: boolean}>`
  font-style: normal;
  width: 100%;
  font-weight: 500;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  gap: 4px;
  background: ${({theme, showMenu}) => theme.colors[showMenu ? 'white' :'lightBiege']};
  border: 1px solid ${({theme, showMenu}) => showMenu ? theme.colors.borderInputDefault : 'transparent'};
  border-radius: ${({showMenu}) => showMenu ? '5px 5px 0 0' : '5px'};
  color: ${({theme}) => theme.colors.black};
  white-space: nowrap;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const IconStyled = styled.div<{ showMenu: boolean }>`
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({showMenu}) => showMenu ? `svg {
    transform: rotateZ(-180deg);
  };` : ''}
`
const Menu = styled.div<{ showMenu: boolean }>`
  visibility: ${({showMenu}) => showMenu ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  gap: 2px;
  padding: 4px 0;
  top: 100%;
  left: 0;
  box-sizing: border-box;
  right: 0;
  transition: all .25s ease-out;
  opacity: ${({showMenu}) => showMenu ? 1 : 0};
  z-index: 100;
  background-color: #fff;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-top: none;
  border-radius: 0 0 5px 5px;
  height: ${({showMenu}) => showMenu ? 'fit-content' : 0};
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
`

const Placeholder = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function Dropdown({value, placeholder, onSelect, label, options, isShowOnlyPlaceholder, ...props}: DropdownProps) {
    const dropdown = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement | null>(null)

    const selectItem = useMemo(() => options.filter(item => item.value === value)[0] || null, [options, value])

    const handleClickOutside = useCallback((e: any) => {
        if (!e.path.includes(dropdown.current)) {
            setShowMenu(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        }
    }, [handleClickOutside])

    const onSelectHandler = useCallback((val: string | number) => {
        onSelect(val)
        setShowMenu(false)
    }, [onSelect])

    const [selectItemItem] = useMemo(() => {
        if (selectItem) {
            return [selectItem.item, selectItem.value]
        } 
            return [placeholder, '-']
        
    }, [selectItem, placeholder])

    const onToggleShow = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu])
    return (
        <DropdownStyled ref={dropdown} {...props}>
            {
                label !== '' && <LabelStyled>{label}</LabelStyled>
            }
            <RowStyled onClick={onToggleShow} showMenu={showMenu}>
                {
                    selectItem && !isShowOnlyPlaceholder
                        ? <Placeholder>
                            {selectItemItem}
                        </Placeholder>
                        : <Placeholder>
                            {placeholder}
                        </Placeholder>
                }
                <IconStyled showMenu={showMenu}>
                    <ChevronDownIcon/>
                </IconStyled>
            </RowStyled>
            <Menu ref={menu} showMenu={showMenu}>
                {
                    options.map((opt, id) => {
                        const isSelected = selectItem?.value === opt.value

                        return (
                            <RowItem isActive={false} isSelected={isSelected}
                                     key={id} onSelect={onSelectHandler} item={opt.item} value={opt.value}/>
                        )
                    })
                }
            </Menu>
        </DropdownStyled>
    );
}

export default Dropdown;