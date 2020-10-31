import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import TaskCard, { Props } from './TaskCard';
import Task from '../models/task';

export default {
  title: 'TaskCard',
  component: TaskCard,
};

const task1: Task = {
  id: '1',
  name: 'Understand the meaning of life',
}

const Template: Story<Props> = (args) => <TaskCard {...args} />;

export const PlainOldCard = Template.bind({});

PlainOldCard.args = {
  task: task1,
};
