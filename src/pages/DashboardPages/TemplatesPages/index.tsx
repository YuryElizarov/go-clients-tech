import React from 'react';
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import TemplatePage from "./TemplatePage";
import {TabsView} from "../../../views/BookingsViews";
import ActionPage from "./ActionPage";
import {PreviewModal} from "../../../components/Modals";
import SendModal from "../../../components/Modals/SendModal";
import PerfomancePage from "./PerfomancePage";
import {FilterComponent} from "../../../components/TemplatesComponents";
import HistoryPage from "./HistoryPage";

const links: Array<{ title: string, link: string }> = [
    {title: 'templates.tabs_link.actions', link: '/templates/actions'},
    {title: 'templates.tabs_link.perfomance', link: '/templates/perfomance'},
    {title: 'templates.tabs_link.history', link: '/templates/history'},
]

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

function Index() {
    return (
        <>
            <PreviewModal/>
            <SendModal/>
            <Routes>
                <Route path="/" element={<TemplatePage/>}/>
                <Route path="/actions" element={<><TabsView links={links}/><ActionPage/></>}/>
                <Route path="/perfomance" element={<>
                    <HeaderStyled>
                        <TabsView links={links}/>
                        <FilterComponent/>
                    </HeaderStyled>
                    <PerfomancePage/></>}/>
                <Route path="/history" element={<>
                    <HeaderStyled>
                        <TabsView links={links}/>
                        <FilterComponent/>
                    </HeaderStyled>
                    <HistoryPage/></>}/>
            </Routes>
        </>
    );
}

export default Index;