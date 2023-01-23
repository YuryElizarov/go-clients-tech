import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import styled from "styled-components";
import _ from 'lodash';
import RowItem from './RowItem';
import {ChevronDownIcon} from "../Svg";


interface MultiselectProps {
    value: string,
    placeholder: string | ReactNode,
    onSelect: (val: any) => void,
    options: Array<{ item: string, shortItem: string, value: string }>,
    label: string,
    isShowOnlyPlaceholder?: boolean,
    maxItemsRender?: number
    customIcon?: ReactNode
}

const MultiselectStyled = styled.div`
  position: relative;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 180px;
`


const RowStyled = styled.div<{ showMenu: boolean }>`
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
  background: ${({theme, showMenu}) => theme.colors[showMenu ? 'white' : 'lightBiege']};
  border: 1px solid ${({theme, showMenu}) => showMenu ? theme.colors.borderInputDefault : 'transparent'};
  border-radius: ${({showMenu}) => showMenu ? '5px 5px 0 0' : '5px'};
  color: ${({theme}) => theme.colors.black};
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
`

function Multiselect({
                         value,
                         placeholder,
                         onSelect,
                         options,
                         customIcon,
                         isShowOnlyPlaceholder,
                         maxItemsRender = 3,
                         ...props
                     }: MultiselectProps) {
    const dropdown = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menu = useRef<HTMLDivElement | null>(null)

    const [selectedItems, setSelectedItems] = useState<string[]>(value.split(',').filter(item => item !== ''));

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


    const onSelectHandler = useCallback((val: string) => {
        setSelectedItems(prevState => {
            if (_.includes(prevState, val)) {
                return [...prevState.filter(item => val !== item)]
            }
            return [...prevState, val]

        })
    }, [setSelectedItems])

    useEffect(() => {
        onSelect(selectedItems.join(','))
    }, [selectedItems])


    const onToggleShow = useCallback(() => {
        setShowMenu(!showMenu)
    }, [showMenu])

    const renderValues = useMemo(() => {
        if (selectedItems.length > 0) {
            const optsFiltered = options.filter((opt) => _.includes(selectedItems, opt.value))
            const optsRender = optsFiltered
                .map((opt) => optsFiltered.length > 2 ? opt.shortItem : opt.item)
            return optsRender.length > maxItemsRender ? `${optsRender.slice(0, maxItemsRender).join(', ')} +${optsRender.length - maxItemsRender}` : optsRender.join(', ')
        }
        return ''
    }, [selectedItems, options])
    return (
        <MultiselectStyled ref={dropdown} {...props}>
            <RowStyled onClick={onToggleShow} showMenu={showMenu}>
                {
                    selectedItems.length > 0 && !isShowOnlyPlaceholder
                        ? <Placeholder>
                            {renderValues}
                        </Placeholder>
                        : <Placeholder>
                            {placeholder}
                        </Placeholder>
                }
                <IconStyled showMenu={showMenu && !customIcon}>
                    {customIcon || <ChevronDownIcon/>}
                </IconStyled>
            </RowStyled>
            <Menu ref={menu} showMenu={showMenu}>
                {
                    options.map((opt, id) => {
                        const isSelected = _.includes(selectedItems, opt.value)

                        return (
                            <RowItem isActive={false} isSelected={isSelected}
                                     key={id} onSelect={onSelectHandler} item={opt.item} value={opt.value}/>
                        )
                    })
                }
            </Menu>
        </MultiselectStyled>
    );
}

export default Multiselect;