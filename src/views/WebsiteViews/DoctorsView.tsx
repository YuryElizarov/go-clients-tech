import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {DoctorComponent, NewsComponent} from "../../components/WebsiteComponents";

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

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
`
const Overflow = styled.div`
  max-width: 100%;
  overflow: auto;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
`

function DoctorsView() {
    const {t} = useTranslation()
    return (
        <Card title={t("website.main.doctors")}
              headerChildren={<ButtonStyled
                  as={Link} to='/website/doctors'
                  variant={EButtonVariants.Gray}>{t("website.main.show_all_doctors")}</ButtonStyled>}
        >
            <Overflow>
                <List>
                    <DoctorComponent/>
                    <DoctorComponent/>
                    <DoctorComponent/>
                    <DoctorComponent/>
                </List>
            </Overflow>
        </Card>
    );
}

export default DoctorsView;