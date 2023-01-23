import React, {useState} from 'react';
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
`

const Hour = styled.div<{ isDisabled: boolean, isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: calc(100% / 3 - (16px / 3));
  width: 100%;
  padding: 8px 10px;
  gap: 4px;
  opacity: ${({isDisabled}) => isDisabled ? .6: 1};
  cursor: ${({isDisabled}) => isDisabled ? 'not-allowed': "pointer"};
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' : 'borderInputDefault']};
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme, isSelected}) => theme.colors[isSelected ? 'white' : 'black']};

`

const hours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",]

function HoursComponent() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return (
        <Wrapper>
            {
                hours.map((hour, id) =>
                    <Hour isSelected={selectedId === id}
                          isDisabled={id % 5 === 0}
                          onClick={() => {
                              if (id % 5 !== 0) {
                                  setSelectedId(prevState => {
                                      if (selectedId === id) {
                                          return null
                                      }
                                      return id

                                  })
                              }
                          }} key={id}>
                        {hour}
                    </Hour>)
            }
        </Wrapper>
    );
}

export default HoursComponent;