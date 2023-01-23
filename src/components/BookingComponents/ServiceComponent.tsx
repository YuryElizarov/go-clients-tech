import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {MoreAction} from "../../UI/MoreAction";
import {DeleteIcon, EditIcon, EyeIcon} from "../../UI/Svg";
import {IService} from "../../types";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 15px 15px;
  gap: 10px;
  isolation: isolate;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
    padding: 20px 12px 12px;
  }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const Title = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
`
const Price = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Content = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Tags = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  left: 15px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 5px;
`

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  background: ${({theme}) => theme.colors.greenHover};
  color: ${({theme}) => theme.colors.green};
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  border-radius: 3px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
    font-size: 12px;
  }
`

const HiddenTag = styled(Tag)`
  background: ${({theme}) => theme.colors.borderInputDefault};
  color: ${({theme}) => theme.colors.darkGrey};
`

function ServiceComponent({
                              service: {delay, title, content, price, isHidden},
                              isShowMore = true
                          }: { service: IService, isShowMore?: boolean }) {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    return (
        <Wrapper>
            <Tags>
                {isHidden && <HiddenTag>{t("booking.services.hidden")}</HiddenTag>}
                <Tag>{delay}</Tag>
            </Tags>
            <Header>
                <Title>{title}</Title>
                <RightBlock>
                    <Price>{price}</Price>
                    {
                        isShowMore && <MoreAction
                            actions={[
                                {
                                    title: <><EditIcon/> {t("booking.services.actions.edit")}</>,
                                    callback: () => onShowModal(EModals.EditService)
                                },
                                {
                                    title: <><EyeIcon/> {t("booking.services.actions.visible")}</>, callback: () => {
                                    }
                                },
                                {
                                    title: <><DeleteIcon/> {t("booking.services.actions.delete")}</>, callback: () => {
                                    }
                                }
                            ]}
                        />
                    }
                </RightBlock>
            </Header>
            <Content>
                {content}
            </Content>
        </Wrapper>
    );
}

export default ServiceComponent;