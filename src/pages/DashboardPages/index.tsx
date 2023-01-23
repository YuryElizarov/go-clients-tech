import React from 'react';
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./MainPage";
import {MenuComponent} from "../../components/DashboardComponents/MenuComponents";
import {
    EditServiceModal,
    NewWaitlistModal,
    PinModal,
    QrcodeModal,
    SearchModal,
    TimetableModal
} from "../../components/Modals";
import {NavbarView} from "../../views/DashboardViews";
import MessengerPage from "./MessengerPage";
import ReviewPage from "./ReviewPage";
import BookingPages from "./BookingPages";
import AddServiceModal from "../../components/Modals/AddServiceModal";
import AdvertisementPages from "./AdvertisementPages";
import NewsPage from './NewsPage';
import WaitListPage from './WaitListPage';
import FormsPages from "./FormsPages";
import CustomizeFormModal from "../../components/Modals/CustomizeFormModal";
import ConstructorPage from "./ConstructorPage";
import TemplatesPages from "./TemplatesPages";
import UserPages from "./UserPages";
import PaymentPage from "./PaymentPage";
import MailingPages from "./MailingPages";
import AnalyticPage from "./AnalyticPage";
import PatientsPages from "./PatientsPages";
import MapPages from "./MapPages";
import CalendarPage from "./CalendarPage";

const Dashboard = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  gap: 20px;
  background: ${({theme}) => theme.colors.backgroundDashboard};
`

const PageStyled = styled.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-left: 56px;
  padding-right: 54px;
  flex-direction: column;
  gap: 20px;
  margin-left: 106px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding-left: 40px;
    padding-right: 40px;
  }
`


function DashboardPage() {
    return (
        <>
            <SearchModal/>
            <PinModal/>
            <TimetableModal/>
            <AddServiceModal/>
            <EditServiceModal/>
            <NewWaitlistModal/>
            <QrcodeModal/>
            <CustomizeFormModal/>
            <Dashboard>
                <MenuComponent/>
                <PageStyled>
                    <NavbarView/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/messages" element={<MessengerPage/>}/>
                        <Route path="/news" element={<NewsPage/>}/>
                        <Route path="/payment" element={<PaymentPage/>}/>
                        <Route path="/analytic" element={<AnalyticPage/>}/>
                        <Route path="/calendar" element={<CalendarPage/>}/>
                        <Route path="/waitlist" element={<WaitListPage/>}/>
                        <Route path="/mailing/*" element={<MailingPages/>}/>
                        <Route path="/map/*" element={<MapPages/>}/>
                        <Route path="/patients/*" element={<PatientsPages/>}/>
                        <Route path="/templates/*" element={<TemplatesPages/>}/>
                        <Route path="/constructor" element={<ConstructorPage/>}/>
                        <Route path="/booking/*" element={<BookingPages/>}/>
                        <Route path="/clinic/*" element={<UserPages/>}/>
                        <Route path="/forms/*" element={<FormsPages/>}/>
                        <Route path="/reviews" element={<ReviewPage/>}/>
                        <Route path="/advertisement/*" element={<AdvertisementPages/>}/>
                    </Routes>
                </PageStyled>
            </Dashboard>
        </>
    );
}

export default DashboardPage;