import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import ReviewComponent from "../../components/MapComponents/ReviewComponent";
import {mockReviews} from "../../mock/map";

const CardStyled = styled(CardComponent)`
  max-width: 412px;
`
const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 0;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
`

function ReviewView() {
    const {t} = useTranslation()
    return (
        <CardStyled title={t("map.review.title")}
                    headerChildren={
                        <ButtonStyled
                            variant={EButtonVariants.Default}><PlusIcon/>{t('map.review.button')}
                        </ButtonStyled>
                    }
        >
            <Content>
                {mockReviews.map((item, id) => <ReviewComponent item={item} key={id}/>)}
            </Content>
        </CardStyled>
    );
}

export default ReviewView;