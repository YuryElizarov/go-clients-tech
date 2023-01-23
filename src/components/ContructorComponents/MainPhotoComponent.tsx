import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CameraIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 30px;
  position: relative;
  width: 100%;
  background: #F8F8F8;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
  min-height: 280px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 24px;
  }
`

const AddPhoto = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  gap: 15px;
  z-index: 3;
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
  white-space: nowrap;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.white};
    }
  }

  z-index: 2;
`

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  z-index: 2;
`

const PhotoText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  color: ${({theme}) => theme.colors.gray};
  z-index: 0;
`

const BgImage = styled.img`
  position: absolute;
  top: 50%;
  left: 90px;
  transform: translateY(-50%);
`

function MainPhotoComponent() {
    const {t} = useTranslation()
    const [preview, setPreview] = useState()
    const [data, setData] = useState<{
        file: File | null,
    }>({
        file: null,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    useEffect(() => {
        if (!data.file) {
            setPreview(undefined)
            return
        }

        const objectUrl: any = URL.createObjectURL(data.file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [data.file])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            onChange('file', null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        onChange('file', e.target.files[0])
    }
    return (
        <Wrapper>
            {preview && <PreviewImage src={preview}/>}
            <BgImage src='/images/main_photo.png' />
            <InputLogo id='main_photo' type="file" onChange={onSelectFile}/>
            <AddPhoto>
                <PhotoButton htmlFor='main_photo'><CameraIcon/>{t("constructor.main_photo.button")}</PhotoButton>
                <PhotoText>{t("constructor.main_photo.text")}</PhotoText>
            </AddPhoto>
        </Wrapper>
    );
}

export default MainPhotoComponent;