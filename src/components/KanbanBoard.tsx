/* eslint-disable no-empty-pattern */
import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Task from '../models/task';

type Props = {
  tasks: Task[];
};

/* Grid layout */
const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 50px;
`;

const KanbanBoard = ({ }: Props) => {

  return (
    <DIV>

    </DIV>
  );
}

export default KanbanBoard;
