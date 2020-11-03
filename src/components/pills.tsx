import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type PillProps = { 
  color: string;
  onClick?: () => void
  label: React.ReactNode;
}

const Pill = ({ color, label, onClick }: PillProps) => (
  <div
    css={css`
      background-color: ${color};
      display: inline-flex;
      align-items: center;
      flex-shrink: 1;
      border-radius: 3px;
      cursor: pointer;
    `}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <div>
      {label}
    </div>
  </div>
);

export default Pill;
