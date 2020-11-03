import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Pill, { PillProps } from './pills';

export default {
  title: 'pills',
  component: Pill,
};

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const DoingPill = Template.bind({});

DoingPill.args = {
  color: 'rgba(255, 0, 26, 0.2)',
  label: (<p>Doing</p>),
};
