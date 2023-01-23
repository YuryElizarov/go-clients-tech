import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import RowDayInput from '../ContructorComponents/RowDayInput';

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

function WorktimeComponent() {
    const {t} = useTranslation()
    return (
        <List>
            <RowDayInput title={t("map.add_location.work_time.labels.sunday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.monday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.tuesday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.wednesday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.thursday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.friday")} />
            <RowDayInput title={t("map.add_location.work_time.labels.saturday")} />
        </List>
    );
}

export default WorktimeComponent;