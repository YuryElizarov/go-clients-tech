import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {PostsIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  min-height: 552px;
  padding: 20px;
`

const Text = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: ${({theme}) => theme.colors.gray};
  max-width: 233px;
`

function EmptyPostListView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <PostsIcon/>
            <Text>{t("news.posts.empty")}</Text>
        </Wrapper>
    );
}

export default EmptyPostListView;