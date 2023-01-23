import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  gap: 20px;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const List = styled.div<{ isShowMore: boolean }>`
  flex-direction: column;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
  position: relative;
  justify-content: flex-start;
  display: flex;
  max-height: ${({isShowMore}) => isShowMore ? 'unset' : '210px'};
  overflow: hidden;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Shadow = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 56px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  ${({theme}) => theme.mediaQueries.ll} {
    height: 56px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  margin: 0 auto;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
  }
`

function ListWrapperComponent({children, length, ...props}: { children?: ReactNode, length: number }) {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const {t} = useTranslation()
    return (
        <Wrapper {...props}>
            <List isShowMore={isShowMore}>
                {children}
                {!isShowMore ? <Shadow/> : null}
            </List>
            {!isShowMore && <ButtonStyled onClick={() => setIsShowMore(true)}
                                          variant={EButtonVariants.Gray}>{t("show_more", {count: length})}</ButtonStyled>}
        </Wrapper>
    );
}

export default ListWrapperComponent;