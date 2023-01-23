import _ from 'lodash';
import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
  gap: 7px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`

const Label = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 32px;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
`

const Tags = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  width: 100%;
`

const Tag = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  white-space: nowrap;
  cursor: pointer;
  gap: 7px;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' : 'borderInputDefault']};
  color: ${({theme, isSelected}) => theme.colors[isSelected ? 'white' : 'black']};
  border-radius: 5px;
  min-width: 80px;
`

function TagInput({
                      label,
                      tags,
                      isMultiple,
                      value,
                      onChange
                  }: { label: string, tags: string[], value: string, isMultiple: boolean, onChange: (val: string) => void }) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Tags>
                {tags.map((tag) => <Tag isSelected={
                    isMultiple
                        ? value
                            ? _.includes(value.split(', '), tag)
                            : false
                        : value === tag
                } onClick={() => {
                    if (isMultiple) {
                        if (!value) {
                            onChange([tag].join(', '))
                        } else {
                            const values = value.split(', ')
                            if (_.includes(values, tag)) {
                                onChange(values.filter((val) => val !== tag).join(', '))
                            } else {
                                onChange([...values, tag].join(', '))
                            }
                        }
                    } else {
                        onChange(tag)
                    }
                }}>{tag}</Tag>)}
            </Tags>
        </Wrapper>
    );
}

export default TagInput;