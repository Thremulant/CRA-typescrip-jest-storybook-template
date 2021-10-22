import React from 'react';
import { PageHeader } from './PageHeader';

export default {
  title: 'Pages/Page Header',
  component: PageHeader,
  argTypes: {
    // 
  },
};

const Template = (args: any) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'New page',
};

Default.parameters = {
  jest: ['PageHeader.test.tsx'],
};

export const QuickLinks = Template.bind({});
QuickLinks.args = {
  title: 'New page',
  quickLinks: [
    { Text: 'Customers', LinkTo: ' ' },
    { Text: 'Materials', LinkTo: ' ' }
  ]
};


