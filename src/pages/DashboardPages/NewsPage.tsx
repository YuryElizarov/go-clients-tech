import React from 'react';
import styled from "styled-components";
import {CreateView, PostsListView} from "../../views/NewsView";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 12px;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`


function NewsPage() {
    return (
        <Wrapper>
            <CreateView/>
            <PostsListView/>
        </Wrapper>
    );
}

export default NewsPage;