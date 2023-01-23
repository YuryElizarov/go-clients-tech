import React, {useEffect} from 'react';
import styled from "styled-components";
import {useAppAction, useAppState} from "../../store/app/hooks";
import {EAlert} from "../../store/app/types";
import {ColorsKey} from "../../theme/types";

const variants: {[key in EAlert]: ColorsKey} = {
    [EAlert.Success]: 'green',
    [EAlert.Error]: 'red',
    [EAlert.Info]: 'gray',
}

const AlertStyled = styled.div<{alertType: EAlert}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  gap: 10px;

  position: fixed;
  z-index: 900;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: ${({theme, alertType}) => theme.colors[variants[alertType]]};
  svg path {
    stroke: ${({theme, alertType}) => theme.colors[variants[alertType]]};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

function Alert() {
    const {alert} = useAppState()
    const {onCloseAlert} = useAppAction()

    useEffect(() => {
        if (alert) {
            const delay = setTimeout(() => {
                onCloseAlert()
            }, 5000)
            return () => {
                clearTimeout(delay);
            }
        }
    }, [alert, onCloseAlert]);

    if (!alert) return null

    return (
        <AlertStyled alertType={alert.alertType} >
            {alert.content}
        </AlertStyled>
    );
}

export default Alert;