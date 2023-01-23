import React, {useState} from 'react';
import styled from "styled-components";
import _ from 'lodash';
import {MapIcon} from "../../UI/Svg";
import {CheckBox} from "../../UI/Input";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
`

const Location = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 7px;
  flex: 1;
  svg {
    width: 16px;
    height: 16px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 20px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  &:last-child {
    border-bottom: none;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 20px 16px;
  }
`
const Value = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  flex: 1;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const locations: {item: string, value: string}[] = [
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: '7 Stoletova str., Moscow, Russia',
        value: '119192',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
    {
        item: 'Aviamotornaya str., 55k5, Moscow, Russia',
        value: '111024',
    },
]
function LocationsComponents() {
    const [data, setData] = useState<number[]>([]);

    const onChange = (val: number) => setData(prevState => {
        if (_.includes(prevState, val)) {
            return [...prevState.filter(item => item !== val)]
        }
        return [...prevState, val]
    })

    return (
        <Wrapper>
            {
                locations.map((item, id) => (
                    <CheckboxBlock key={id}>
                        <Location>
                            <MapIcon/>
                            {item.item}
                        </Location>
                        <Value>
                            {item.value}
                        </Value>
                        <CheckBox value={_.includes(data, id)} onChange={() => onChange(id)} id={`check-${id}`}/>
                    </CheckboxBlock>
                ))
            }
        </Wrapper>
    );
}

export default LocationsComponents;