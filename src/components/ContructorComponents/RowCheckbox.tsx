import React, {useState} from 'react';
import styled from "styled-components";
import {CheckBox} from "../../UI/Input";

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 8px;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 15px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`


const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function RowCheckbox({item, value}: { item: string, value: string }) {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <Row>
            <Left>
                <CheckBox value={isActive} onChange={() => setIsActive(isActive)} id=''/>
                {item}
            </Left>
            <Right>
                <Label>
                    {value}
                </Label>
            </Right>
        </Row>
    );
}

export default RowCheckbox;