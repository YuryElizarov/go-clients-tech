import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import { Dropdown } from '../../UI/Dropdown';
import ActivityContentComponent from "../../components/DashboardComponents/ActivityComponents/ActivityContentComponent";
import {mockActivityPatient} from "../../mock/activity";
import {MainDataComponent} from "../../components/PatientsComponents";

const Block = styled.div`
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 698px;
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
                <HeadingStyled as="h3">{t("patients.activity.title")}</HeadingStyled>
                <Dropdown isShowOnlyPlaceholder={false} value={selectedOption} placeholder={t("patients.activity.all", {count: 20})}
                          onSelect={val => setSelectedOption(val)} options={activities} label=""/>
            </Title>
            <MainDataComponent/>
            {
                mockActivityPatient.map((item, id) => <ActivityContentComponent item={item} key={`Activity-${id}`}/>)
            }
        </Block>
    );
}

export default ActivityView;