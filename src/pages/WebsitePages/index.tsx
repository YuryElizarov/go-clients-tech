import React from 'react';
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./MainPage";
import NavbarView from "../../views/WebsiteViews/NavbarView";
import DoctorsPage from "./DoctorsPage";
import FooterView from "../../views/WebsiteViews/FooterView";
import DoctorPage from "./DoctorPage";
import NewsPage from "./NewsPage";
import BookingPage from "./BookingPage";

const Wrapper = styled.div`
  width: 100%;
  background: #F5F7FB;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.div`
  flex: 1;
  width: 100%;
`

function Index() {
    return (

        <Wrapper>
            <NavbarView/>
            <MainContent>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/doctor" element={<DoctorPage/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                    <Route path="/doctors" element={<DoctorsPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                </Routes>
            </MainContent>
            <FooterView/>
        </Wrapper>
    );
}

export default Index;