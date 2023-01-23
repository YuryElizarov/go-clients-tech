import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Tabs} from '../../../UI/Tabs';
import { WidgetsListView } from '../../../views/BookingsViews';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

function WidgetsPage() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Tabs headers={[
                <>{t("booking.widgets.tabs.institution")} <span>5</span></>,
                <>{t("booking.widgets.tabs.location")} <span>5</span></>,
                <>{t("booking.widgets.tabs.providers")} <span>5</span></>,
            ]}
                  contents={[
                      <WidgetsListView/>,
                      <>
                          <WidgetsListView/>
                          <WidgetsListView/>
                          <WidgetsListView/>
                      </>,
                      <WidgetsListView/>,
                  ]}/>
        </Wrapper>
    );
}

export default WidgetsPage;