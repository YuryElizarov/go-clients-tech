import React, {ReactNode, useCallback} from 'react';
import styled from "styled-components";
import {CloseIcon} from "../Svg";
import {EModals} from "../../store/app/types";
import {useAppAction} from "../../store/app/hooks";

interface ModalProps {
    headerChildren?: ReactNode,
    titleChildren?: ReactNode,
    children: ReactNode,
    title?: string | null,
    onCloseAction?: () => void,
    modal: EModals,
    footerContent?: ReactNode
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: ${({theme}) => theme.colors.modalWrapper};
  z-index: 10000;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`

const Overflow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 90%;
  overflow: auto;
`

const ModalStyled = styled.div`
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px;
  position: relative;

`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`

const Content = styled.div`
`

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.white};
  backdrop-filter: blur(50px);
  border-radius: 100px;
  width: 32px;
  height: 32px;
  ${({theme}) => theme.mediaQueries.ll} {
    width: 26px;
    height: 26px;
  }
`

const Header = styled.div`
  width: 100%;
  padding: 20px 20px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 0;
  }
`

const ModalsWrappers = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

function Modal({
                   headerChildren,
                   titleChildren,
                   children,
                   title,
                   modal,
                   onCloseAction,
                   footerContent,
                   ...props
               }: ModalProps) {
    const {onCloseModal} = useAppAction()

    const onClose = useCallback(() => {
        onCloseModal(modal)
        if (onCloseAction) {
            onCloseAction()
        }
    }, [onCloseModal, modal, onCloseAction])

    return (
        <Wrapper>
            <Overflow>
            <Row>
                <ModalsWrappers {...props}>
                    <ModalStyled>
                        {title && <Header>
                            <Title>
                                {title}
                                {titleChildren}
                            </Title>
                            {headerChildren}
                        </Header>}
                        <Content>
                            {children}
                        </Content>
                    </ModalStyled>
                    {footerContent}
                </ModalsWrappers>

                <CloseButton onClick={onClose}>
                    <CloseIcon/>
                </CloseButton>
            </Row>
            </Overflow>
        </Wrapper>
    );
}

export default Modal;