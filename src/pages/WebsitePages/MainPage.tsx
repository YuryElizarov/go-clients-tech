import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import banner from '../../assets/images/Banner.png'
import {CardComponent} from "../../components/UserComponents";
import {ReviewListView} from "../../views/ReviewViews";
import {ReviewWrapper} from "../../components/ReviewComponents/ReviewComponent";
import {
    AddressesView,
    DoctorsView,
    GalleryView,
    LastNewsView,
    ServicesView,
    WorkHourView
} from '../../views/WebsiteViews';

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  gap: 22px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 26px;
  }
`

const Banner = styled.div`
  width: 100%;
  max-height: 520px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 753px;
  gap: 20px;
  flex: 1;
`

const Aside = styled.div`
  display: flex;
  width: 100%;
  max-width: 441px;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${({theme}) => theme.colors.darkGrey};
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const CardAbout = styled(CardComponent)`
  gap: 10px;
  padding: 20px;
  & > div {
    &:first-child {
      padding: 0;
      border-bottom: none;
    }
  }
`

const Reviews = styled(ReviewListView)`
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  
  & > div {
    &:nth-child(1) {
      padding: 0;
      border: none;
      margin-bottom: 20px;
      background: none;
      box-shadow: none;
    }
    &:nth-child(2) {
      gap: 10px;
      ${ReviewWrapper} {
        min-width: unset;
        box-shadow: none;
        border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
        border-radius: 5px;
        width: 100%;
        ${ReviewWrapper} {
          border: none;
        }
      }
    }
  }
`
function MainPage() {
    const {t} = useTranslation()
    return (
        <>
            <Banner>
                <BannerImage src={banner}/>
            </Banner>
            <Content>
                <MainContent>
                    <CardAbout title={t("website.about")}>
                        <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Text>
                        <Text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</Text>
                    </CardAbout>
                    <LastNewsView/>
                    <GalleryView/>
                    <DoctorsView/>
                    <Reviews/>
                </MainContent>
                <Aside>
                    <WorkHourView/>
                    <AddressesView/>
                    <ServicesView title="website.main.services"/>
                </Aside>
            </Content>
        </>
    );
}

export default MainPage;