import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width=250, size, placeholder }) => {
  const InputSize = size === "small" ? SmallInput : LargeInput;
  const iconsize = size === "small" ? 16 : 24;
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': iconsize + 'px'}}>
        <Icon id={icon} size={iconsize}/>
      </IconWrapper>
      <InputSize placeholder={placeholder} style={{'--width': width + 'px'}}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`
const TextInput = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;

  &:focus {
    outline-offset: 5px;
    outline: 2px auto -webkit-focus-ring-color;
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`
const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  bottom: 1.5px;
  margin: auto;
`
const SmallInput = styled(TextInput)`
  font-size: ${14/16}rem;
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px;
  padding-left: 24px;

`
const LargeInput = styled(TextInput)`
  font-size: ${18/16}rem;
  border-bottom: 2px solid ${COLORS.black};
  padding: 8px;
  padding-left: 36px;

`
export default IconInput;
