import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import CopyToClipboard from 'react-copy-to-clipboard';
import {Button, EButtonVariants} from "../../UI/Button";
import {CopyIcon} from "../../UI/Svg";
import {useAppAction} from "../../store/app/hooks";
import {EAlert} from "../../store/app/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: ${({theme}) => theme.colors.lightBiege};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
`

const ButtonBlock = styled.div`
  padding: 20px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const ButtonStyled = styled(Button)`
  font-size: 20px;
  line-height: 100%;
  max-width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const WidgetContent = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const CopyButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin-top: -24px;
`

function WidgetComponent() {
    const {t} = useTranslation()
    const {onShowAlert} = useAppAction()
    return (
        <Wrapper>
            <ButtonBlock>
                <ButtonStyled variant={EButtonVariants.Default}>{t("booking.widgets.button")}</ButtonStyled>
            </ButtonBlock>
            <Content>
                <WidgetContent>
                {`<script src="//vk.com/js/api/openapi.js"></script>
                    <div id="vk_group1" style="display: inline-block; width: 33%;"></div>
                    <div id="vk_group2" style="display: inline-block; width: 33%;"></div>
                    <!-- VK Widgets -->`}
                </WidgetContent>
                <CopyToClipboard text={`<script src="//vk.com/js/api/openapi.js"></script>
                    <div id="vk_group1" style="display: inline-block; width: 33%;"></div>
                    <div id="vk_group2" style="display: inline-block; width: 33%;"></div>
                    <!-- VK Widgets -->`}
                                 onCopy={() => onShowAlert({alertType: EAlert.Success, content: <><CopyIcon/>{t("booking.widgets.copied")}</>})}>

                    <CopyButton>
                        <CopyIcon/>
                    </CopyButton>
                </CopyToClipboard>
            </Content>
        </Wrapper>
    );
}

export default WidgetComponent;