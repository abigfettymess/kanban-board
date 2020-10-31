import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type PillProps = { 
  color: string;
  label: string;
}

const Pill = ({ color, label }: PillProps) => (
  <div
    css={css`
      background-color: ${color};
      display: inline-flex;
      align-items: center;
      flex-shrink: 1;
      border-radius: 3px;
      line-height: 120%;
    `}
  >
    <p 
      css={css`
        font-size: 14px;
        color: rgba(55, 53, 47, 0.4);
        
      `}>{label}</p>    
  </div>
);

export default Pill;
