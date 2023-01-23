import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {Button, EButtonVariants} from "../../UI/Button";
import {EyeIcon} from "../../UI/Svg";
import Loading from "../../UI/Loading/Loading";
import {
    BannerDataComponent, DoctorsComponent, GalleryComponent,
    MainDataComponent,
    MainPhotoComponent,
    WrapperComponent
} from "../../components/ContructorComponents";
import ReviewsComponent from "../../components/ContructorComponents/ReviewsComponent";

const Wrapper = styled.div`
  width: 100%;
  max-width: 984px;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
`


const Header = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
`

const ButtonStyled = styled(Button)`
  font-size: 16px;
  line-height: 100%;
  gap: 7px;
  padding: 8px 10px;
`

const Card = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const WrapperStyled = styled(WrapperComponent)`
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const NewsContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  a {
    color: ${({theme}) => theme.colors.green};
    text-decoration: underline;
  }
`
function ContentView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Card>
                <Header>
                    <HeadingStyled as="h3">{t("constructor.title")}</HeadingStyled>
                    <Actions>
                        <Loading title={t("constructor.loading")}/>
                        <ButtonStyled variant={EButtonVariants.Gray}><EyeIcon/>{t("constructor.button")}</ButtonStyled>
                    </Actions>
                </Header>
                <MainDataComponent/>
                <MainPhotoComponent/>
                <WrapperComponent title={t("constructor.banner.title")}>
                    <BannerDataComponent/>
                </WrapperComponent>
            </Card>

            <WrapperStyled title={t("constructor.news.title")}>
                <NewsContent>
                    {t("constructor.news.desc")}
                </NewsContent>
            </WrapperStyled>
            <WrapperStyled title={t("constructor.gallery.title")}>
                <GalleryComponent/>
            </WrapperStyled>
            <WrapperStyled title={t("constructor.doctors.title")}>
                <DoctorsComponent/>
            </WrapperStyled>
            <WrapperStyled title={t("constructor.reviews.title")}>
                <ReviewsComponent/>
            </WrapperStyled>
        </Wrapper>
    );
}

export default ContentView;