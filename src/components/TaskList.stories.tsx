import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import TaskList, { Props } from './TaskList';
import Task, { TaskType } from '../models/task';

export default {
  title: 'TaskList',
  component: TaskList,
};

const Template: Story<Props> = (args) => <TaskList {...args} />;

export const DoingTaskList = Template.bind({});
DoingTaskList.args = {
  type: TaskType.DOING,
  tasks: [],
};
