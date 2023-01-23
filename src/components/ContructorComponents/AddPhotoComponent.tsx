import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {CameraIcon} from "../../UI/Svg";

const AddPhoto = styled.div`
  background: #F8F8F8;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
  min-width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  justify-content: center;
`

const InputLogo = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
`

const PhotoButton = styled.label`
  background: #888888;
  cursor: pointer;
  padding: 8px 16px;
  gap: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 56px;
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, -50%);

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.white};
    }
  }

  z-index: 2;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 12px;
    gap: 6px;
  }
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`

const PhotoText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 71px;
  color: ${({theme}) => theme.colors.gray};
  z-index: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-style: 10px;
  }
`

function AddPhotoComponent({value, buttonText, text, onChange, id,  ...props}: {onChange: (val: any) => void, id: string, value: any, buttonText: string, text:string}) {

    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!value) {
            setPreview(undefined)
            return
        }

        const objectUrl: any = URL.createObjectURL(value)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [value])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            onChange(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        onChange(e.target.files[0])
    }
    return (
        <AddPhoto { ...props}>
            {preview && <PreviewImage src={preview}/>}
            <InputLogo id={id} type="file" onChange={onSelectFile}/>
            <PhotoButton htmlFor={id}><CameraIcon/>{buttonText}</PhotoButton>
            {text && <PhotoText>{text}</PhotoText>}
        </AddPhoto>
    );
}

export default AddPhotoComponent;