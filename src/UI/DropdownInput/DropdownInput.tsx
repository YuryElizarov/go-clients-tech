import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styled from "styled-components";
import RowItem from './RowItem';
import {ChevronDownIcon} from "../Svg";


interface DropdownInputProps {
    value: string | number,
    placeholder: string | ReactNode,
    onSelect: (val: any) => void,
    options: Array<{ item: string | ReactNode, value: string | number }>,
    label: string,
    isShowOnlyPlaceholder?: boolean
}

const DropdownInputStyled = styled.div`
  position: relative;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 180px;
`

const Label = styled.label<{ isFocused: boolean }>`
  color: ${({isFocused, theme}) => theme.colors[isFocused ? 'grayC4' : 'gray']};
  position: absolute;
  top: ${({isFocused}) => isFocused ? '0' : '50%'};
  transform: translateY(-50%);
  left: 0;
  font-weight: 500;
  font-size: ${({isFocused}) => isFocused ? '12px' : '16px'};
  line-height: ${({isFocused}) => isFocused ? '100%' : '140%'};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: ${({isFocused}) => isFocused ? '10px' : '12px'};
  }
`

const RowStyled = styled.div<{showMenu: boolean, isFocused: boolean}>`
  font-style: normal;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 4px;
  background: none;
  border-radius: 0;
  color: ${({theme}) => theme.colors.black};
  white-space: nowrap;
  
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  padding: ${({isFocused}) => isFocused ? '20px' : '15px'} 0 15px;

  &:focus {
    border-color: ${({theme}) => theme.colors.green};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: ${({isFocused}) => isFocused ? '16px' : '12px'} 0 12px;
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
  min-height: 22px;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    min-height: 18px;
  }
`

function DropdownInput({value, placeholder, onSelect, label, options, isShowOnlyPlaceholder, ...props}: DropdownInputProps) {
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
        <DropdownInputStyled ref={dropdown} {...props}>
            {
                label !== '' && <Label onClick={onToggleShow} isFocused={showMenu || !!value}>{label}</Label>
            }
            <RowStyled onClick={onToggleShow} isFocused={showMenu || !!value} showMenu={showMenu}>
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
        </DropdownInputStyled>
    );
}

export default DropdownInput;