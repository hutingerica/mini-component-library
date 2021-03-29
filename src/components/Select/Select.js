import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <DisplayWrapper>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </DisplayWrapper>
    </Wrapper>

  );
};

const Wrapper = styled.div`
  width: max-content;
  position:relative;
`
const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const DisplayWrapper = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
  ${SelectWrapper}:focus + & {
    outline-offset: -1px;
    outline: 3px auto -webkit-focus-ring-color;
  }
`
const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  position: absolute;
  top:0;
  bottom:0;
  margin: auto;
  right: 16px;
  pointer-events: none;
`
export default Select;
