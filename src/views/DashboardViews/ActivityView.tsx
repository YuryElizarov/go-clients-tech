import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import { Dropdown } from '../../UI/Dropdown';
import {ActivityComponent} from "../../components/DashboardComponents/ActivityComponents";
import {mockActivityList} from "../../mock/activity";

const Block = styled.div`
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 698px;
  min-width: calc(100% / 3);
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    max-width: unset;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

function ActivityView() {
    const {t} = useTranslation()
    const [selectedOption, setSelectedOption] = useState<string>('');

    const activities: Array<{item: string, value: string}> = useMemo(() => ([
        {item: t("activity_view.options.date"), value: 'date'},
        {item: t("activity_view.options.pay"), value: 'pay'},
        {item: t("activity_view.options.messages"), value: 'messages'},
        {item: t("activity_view.options.star"), value: 'star'},
    ]), [t]) 
    return (
        <Block>
            <Title>
                <HeadingStyled as="h3">{t("activity_view.title")}</HeadingStyled>
                <Dropdown isShowOnlyPlaceholder={false} value={selectedOption} placeholder={t("activity_view.all", {count: 20})}
                          onSelect={val => setSelectedOption(val)} options={activities} label=""/>
            </Title>
            <List>
                {
                    mockActivityList.map((item, id) => <ActivityComponent key={id} {...item}/>)
                }
            </List>
        </Block>
    );
}

export default ActivityView;