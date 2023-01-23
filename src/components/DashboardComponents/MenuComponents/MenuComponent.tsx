import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {HelpIcon, LogoMiniIcon, SvgProps} from "../../../UI/Svg";
import MenuItemComponent from './MenuItemComponent';
import * as IconModule from "../../../UI/Svg"
import {menuItems} from "../../../config/menu";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: flex-start;
  height: 100vh;
  max-height: 100vh;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  padding: 36px 0 32px;
  gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 30px 0 26px;
    gap: 36px;
  }
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 8px;
  flex: 1;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

function MenuComponent() {
    const {t} = useTranslation()
    return (
        <MenuWrapper>
            <Logo><LogoMiniIcon height={48}/></Logo>
            <MenuList>
                {
                    menuItems.map((menuItem, id) => {

                        const Icon = Icons[menuItem.icon];
                        const iconElement = <Icon/>;
                        return <MenuItemComponent key={`MenuItem-${id}`} link={menuItem.link} tip={t(`menu.${menuItem.tip}`)} icon={iconElement}/>
                    })
                }
            </MenuList>
            <MenuItemComponent link='/help' tip={t(`menu.help`)} icon={<HelpIcon/>}/>
        </MenuWrapper>
    );
}

export default MenuComponent;