import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {NewsComponent} from "../../components/WebsiteComponents";

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

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
`

function LastNewsView() {
    const {t} = useTranslation()
    return (
        <Card title={t("website.main.last_news")}
              headerChildren={<ButtonStyled
                  as={Link} to='/website/news'
                  variant={EButtonVariants.Gray}>{t("website.main.show_all_news")}</ButtonStyled>}
        >
            <List>
                <NewsComponent/>
                <NewsComponent/>
            </List>
        </Card>
    );
}

export default LastNewsView;