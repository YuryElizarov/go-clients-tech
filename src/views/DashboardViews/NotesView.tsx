import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Heading} from "../../UI/Heading";
import {ChevronRightIcon, PlusIcon} from "../../UI/Svg";
import {NoteComponent, NoteCreateComponent} from '../../components/DashboardComponents/NotesComponents';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex: 1;
  max-width: 410px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const LinkAll = styled(Link)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.green};
  svg path {
    stroke: ${({theme}) => theme.colors.green};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const CreateBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  svg path {
    stroke: ${({theme}) => theme.colors.green};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 5px;
  }
`

const List = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

function NotesView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("notes.title")}</HeadingStyled>
                <LinkAll to='/all'>{t("notes.all")} <ChevronRightIcon height={16} width={16}/></LinkAll>
            </Header>
            <List>
                <NoteComponent/>
                <NoteCreateComponent/>
            </List>
            <CreateBlock>
                <PlusIcon/> {t("notes.create")}
            </CreateBlock>
        </Wrapper>
    );
}

export default NotesView;