import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagMoreInfo, { TagMoreInfoProps } from '../../tagContextMenu/TagMoreInfo';

export default {
    title: 'TagMoreInfo',

    component: TagMoreInfo,
    argTypes: {}
} as Meta;

const Template: Story<TagMoreInfoProps> = (args) => <TagMoreInfo {...args} />;

export const Default = Template.bind({});

Default.args = {};
