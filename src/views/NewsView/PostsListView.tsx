import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Heading} from "../../UI/Heading";
import {SearchIcon} from "../../UI/Svg";
import {Tabs} from "../../UI/Tabs";
import EmptyPostListView from './EmptyPostListView';
import {PostComponent} from "../../components/NewsComponent";
import {useNewsState} from "../../store/news/hooks";


const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const Header = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  svg {
    width: 24px;
    height: 24px;

    path {
      stroke: ${({theme}) => theme.colors.gray}

    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const TabsStyled = styled(Tabs)`
  & > div:first-child {
    padding: 0 20px;
    width: 100%;
    ${({theme}) => theme.mediaQueries.ll} {
      padding: 0 16px;
    }
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding:0 20px 20px;
  gap: 15px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 0 16px 16px;
  }
`
function PostsListView() {
    const {t} = useTranslation()
    const {posts} = useNewsState()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("news.posts.title")}</HeadingStyled>
                <SearchIcon/>
            </Header>
            <TabsStyled headers={[
                <>{t("news.posts.tabs.all")} <span>{posts.length}</span></>,
                <>{t("news.posts.tabs.deferred")}</>,
                <>{t("news.posts.tabs.drafts")}</>,
                <>{t("news.posts.tabs.facebook")}</>,
                <>{t("news.posts.tabs.google")}</>,
            ]} contents={[
                <List>
                    {posts.map((post, id) => <PostComponent key={`Post-${id}`} post={post} />)}
                </List>,
                <EmptyPostListView/>,
                <EmptyPostListView/>,
                <EmptyPostListView/>,
                <EmptyPostListView/>,
            ]}/>
        </Wrapper>
    );
}

export default PostsListView;