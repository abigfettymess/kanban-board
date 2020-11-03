import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

type Props = {
  children: React.ReactNode;
};

const Context = ({ children }: Props) => (
  // @ts-ignore
  <DndProvider backend={Backend}>{children}</DndProvider>
);

export default Context;
