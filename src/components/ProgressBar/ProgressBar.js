/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--width": "370px",
    "--height": "8px",
    "--barHeight": "8px",
    "--radius": "4px",
    "--padding": 0,
  },
  medium: {
    "--width": "370px",
    "--height": "12px",
    "--barHeight": "12px",
    "--radius": "4px",
    "--padding": 0,
  },
  large: {
    "--width": "370px",
    "--height": "24px",
    "--barHeight": "16px",
    "--radius": "8px",
    "--padding": "4px",
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  let Component;
  if(value >= 98.5){
    Component = FullValueBar;
  }else Component = ValueBar;

  return (
    <SizeWrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Component style={styles} progress={value + "%" }></Component>
    </SizeWrapper>
  );
};

const BaseWrapper = styled.div`
  width: var(--width);
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const SizeWrapper = styled(BaseWrapper)`
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
`
const ValueBar = styled(BaseWrapper)`
  background-color: ${COLORS.primary};
  width: ${props=>props.progress};
  height: var(--barHeight);
  border-radius: 4px 0 0 4px;

`
const FullValueBar = styled(ValueBar)`
  border-radius: 4px;
`
export default ProgressBar;
