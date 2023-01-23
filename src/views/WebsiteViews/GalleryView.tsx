import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";

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

const Image = styled.div`
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  max-height: 195px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  img {
    width: 100%;
    height: auto;
  }
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
`

function GalleryView() {
    const {t} = useTranslation()
    return (
        <Card title={t("website.main.gallery")}
              headerChildren={<ButtonStyled
                  as={Link} to='/website/gallery'
                  variant={EButtonVariants.Gray}>{t("website.main.show_all_arts")}</ButtonStyled>}
        >
            <List>
                <Image><img src="/images/posts/post_1.png" alt=""/></Image>
                <Image><img src="/images/posts/post_2.png" alt=""/></Image>
            </List>
        </Card>
    );
}

export default GalleryView;