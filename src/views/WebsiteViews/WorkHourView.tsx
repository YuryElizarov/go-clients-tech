import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent} from "../../components/UserComponents";
import WorkHoursComponent from "../../components/WebsiteComponents/WorkHoursComponent";

const Card = styled(CardComponent)`
  gap: 10px;
  padding: 20px;

  & > div {
    &:first-child {
      margin-bottom: 20px;
      padding: 0;
      border-bottom: none;
    }
  }
`
function WorkHourView() {
    const {t} = useTranslation()
    return (
        <Card title={t("website.main.work_hours")}
        >
            <WorkHoursComponent/>
        </Card>
    );
}

export default WorkHourView;