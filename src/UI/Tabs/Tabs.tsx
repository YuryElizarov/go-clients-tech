import React, {ReactNode, useState} from 'react';
import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  border-bottom: 2px solid ${({theme})=> theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  padding-bottom: 16px;
  color: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'black']};
  border-bottom: 2px solid ${({theme, isActive}) => isActive ? theme.colors.green : 'transparent'};
  cursor: pointer;
  margin-bottom: -2px;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 4.5px;
    background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4']};
    border-radius: 800px;
    color: ${({theme}) => theme.colors.white};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function Tabs({headers, contents, ...props}: { headers: Array<string | ReactNode>, contents: ReactNode[] }) {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <Block {...props}>
            <Wrapper>
                {
                    headers.map((item, id) => <Tab key={`Tab-${id}`} isActive={activeTab === id} onClick={() => setActiveTab(id)}>{item}</Tab>)
                }
            </Wrapper>
            {
                contents[activeTab]
            }
        </Block>
    );
}

export default Tabs;