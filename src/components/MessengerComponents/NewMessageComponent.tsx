import React, {useCallback} from 'react';
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';
import {PaperclipIcon, SendIcon, SmileIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 30px;
  gap: 16px;
  width: 100%;
  border-top: 1px solid #EDEDED;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 24px;
    gap: 12px;
  }
`

const Input = styled(TextareaAutosize)`
  width: 100%;
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  &:focus {
    border-color: ${({theme}) => theme.colors.borderInputDefault};
  }
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
`

const emoji = [
    '😀', '😃', '😄', '😁', '😆', '😅'
]

function NewMessageComponent({message, onChange, placeholder}: {message: string, onChange:(val: string) => void, placeholder: string}) {
    const onAddEmoji = useCallback (() => {
        onChange(message + emoji[0])
    }, [message])
    return (
        <Wrapper>
            <ButtonIcon><PaperclipIcon width={24} height={24}/></ButtonIcon>
            <Input value={message} placeholder={placeholder} onChange={event => onChange(event.target.value)}/>
            <ButtonIcon onClick={onAddEmoji}><SmileIcon /></ButtonIcon>
            <ButtonIcon><SendIcon/></ButtonIcon>
        </Wrapper>
    );
}

export default NewMessageComponent;