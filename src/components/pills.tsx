import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type PillProps = { 
  color: string;
  onClick?: () => void
  children: React.ReactNode;
}

const Pill = ({ color, children , onClick }: PillProps) => (
  <div
    css={css`
      background-color: ${color};
      border-radius: 3px;
      cursor: pointer;
      width: 50px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <div>
      <p
        css={css`
          font-size: 12px;
          color: rgb(55, 53, 47);
          text-align: center;
        `}
      >{children}</p>
    </div>
  </div>
);

export default Pill;
