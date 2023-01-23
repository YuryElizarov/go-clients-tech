import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Toggle} from "../../UI/Toggle";
import {CopyIcon, SettingsIcon} from "../../UI/Svg";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  padding: 20px;
  align-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 10px;
  }
`

const ToggleBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
  }
`
const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #3D3D3D;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const RightBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  svg {
    width: 24px;
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: unset;
  font-size: 16px;
  svg {
    width: 16px;
    height: 16px;
  }
`
function EnterComponent() {
    const {t} = useTranslation()
    const [isToggle, setIsToggle] = useState<boolean>(false);
    return (
        <Wrapper>
            <ToggleBlock>
                <Label>{t('user.person_data.enter.auth')}</Label>
                <RightBlock>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                    <Toggle isActive={isToggle} onToggle={() => setIsToggle(!isToggle)}/>
                </RightBlock>
            </ToggleBlock>
            <ButtonStyled disabled variant={EButtonVariants.Gray}>
                <CopyIcon/>
                {t('user.person_data.enter.copy')}
            </ButtonStyled>
        </Wrapper>
    );
}

export default EnterComponent;