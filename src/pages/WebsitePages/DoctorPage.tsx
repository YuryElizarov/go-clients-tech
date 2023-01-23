import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {BookingView, ServicesView} from "../../views/WebsiteViews";
import {ReviewListView} from "../../views/ReviewViews";
import {ReviewWrapper} from "../../components/ReviewComponents/ReviewComponent";
import {Heading} from "../../UI/Heading";
import RatingComponent from "../../components/WebsiteComponents/RatingComponent";
import WorkHoursComponent from "../../components/WebsiteComponents/WorkHoursComponent";

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

const Aside = styled.div`
  display: flex;
  width: 100%;
  max-width: 441px;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const About = styled.div`
  width: 100%;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

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
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
`

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`

const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 30px;
`

const Image = styled.div`
  min-width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
  }
`

const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const NameBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`
function DoctorPage() {
    const {t} = useTranslation()
    return (
        <Content>
            <MainContent>
                <About>
                    <InfoBlock>
                        <Image>
                            <img src="/images/profile.png" alt="Profile"/>
                        </Image>
                        <Info>
                            <RatingComponent/>
                            <NameBlock>
                                <Title>Аверинов Дмитрий Олегович</Title>
                                <Text>Врач-стоматолог</Text>
                            </NameBlock>
                            <WorkHoursComponent/>
                        </Info>
                    </InfoBlock>
                    <Desc>
                        <Title>{t('website.doctor.about')}</Title>
                        <Text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</Text>
                    </Desc>
                </About>
                <ServicesView title='website.doctor.services'/>
                <Reviews/>
            </MainContent>
            <Aside>
                <BookingView/>
            </Aside>
        </Content>
    );
}

export default DoctorPage;