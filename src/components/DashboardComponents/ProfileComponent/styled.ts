import styled from 'styled-components'

export const ProfileBlock = styled.div`
  position: relative;
  z-index: 100;
`

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 4px 4px 4px 20px;
  gap: 10px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 56px;
  z-index: 1;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 4px 4px 4px 16px;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};

  svg path {
    stroke: ${({theme}) => theme.colors.green};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 40px;
    height: 40px;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
`

export const Name = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
export const LinkFacebook = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 4px 4px 4px 20px;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  
  svg path {
    stroke: ${({theme}) => theme.colors.gray};
    fill: ${({theme}) => theme.colors.gray};
  }
  &:hover {
    background: #E7F6F5;
    ${Name}, ${LinkFacebook} {
      color: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 4px 4px 4px 16px;
    gap: 8px;
  }
`
