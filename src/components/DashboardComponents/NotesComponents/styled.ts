import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  background: ${({theme}) => theme.colors.lightBiege};
  padding: 16px 16px 24px;
  border-radius: 10px;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 20px;
    padding: 12px 12px 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 16px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

export const Item = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;

  span {
    display: flex;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.red};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 6px;
    span {
      width: 6px;
      height: 6px;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const ActionButton = styled.button`
  display: flex;    
  align-items: center;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  background: none;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

export const SaveButton = styled(ActionButton)`
  color: ${({theme}) => theme.colors.green};
`
export const CancelButton = styled(ActionButton)`
  color: ${({theme}) => theme.colors.darkGrey};
`