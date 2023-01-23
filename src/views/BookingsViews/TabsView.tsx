import React from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Tabs = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 32px;
  margin-top: 12px;
  border-bottom: 2px solid ${({theme}) => theme.colors.borderInputDefault};
  
`

const TabWrapper = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  border-bottom: 2px solid ${({theme, isActive}) => isActive ? theme.colors.green : 'transparent'};
  & > a {
    color: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'black']};
  }
`

const Tab = styled(Link)`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 0 0 12px;font-size: 24px;
  line-height: 120%;
  font-weight: 500;
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 20px;
  }
`

function TabsView({links}: {links: Array<{title: string, link: string}>}) {
    const {t} = useTranslation()
    const {pathname} = useLocation()
    return (
        <Tabs>
            {
                links.map((item, id) => <TabWrapper key={id} isActive={pathname === item.link}>
                    <Tab to={item.link}>{t(item.title)}</Tab></TabWrapper>)
            }
        </Tabs>
    );
}

export default TabsView;