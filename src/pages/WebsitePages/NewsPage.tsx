import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {NewsComponent} from "../../components/WebsiteComponents";
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

const News = styled(NewsComponent)`
  max-width: calc(100% / 3 - (40px / 3));
  &:nth-child(1), &:nth-child(2) {
    max-width: calc(100% / 2 - (20px / 2));
    & > div {
      &:first-child {
        height: 340px;
      }
    }
  }
`

const Title = styled(Heading)`
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 26px;
  }
`
function NewsPage() {
    const {t} = useTranslation()
    return (
        <Content>
            <Title as='h2'>{t("website.news.title")}</Title>
            <List>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
                <News/>
            </List>
        </Content>
    );
}

export default NewsPage;