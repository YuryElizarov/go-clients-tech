import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {DoctorComponent} from "../../components/WebsiteComponents";
import {Heading} from "../../UI/Heading";

const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 32px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 26px;
  }
`

const List = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`

const Doctor = styled(DoctorComponent)`
  max-width: calc(100% / 4 - 15px);
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 26px;
  }
`
function DoctorsPage() {
    const {t} = useTranslation()
    return (
        <Content>
            <Title as='h2'>{t("website.doctor.title")}</Title>
            <List>
                <Doctor/>
                <Doctor/>
                <Doctor/>
                <Doctor/>
                <Doctor/>
                <Doctor/>
                <Doctor/>
                <Doctor/>
            </List>
        </Content>
    );
}

export default DoctorsPage;