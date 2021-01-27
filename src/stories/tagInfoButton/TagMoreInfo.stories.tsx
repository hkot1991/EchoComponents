import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagInfoButton, { TagInfoButtonProps } from '../../tagPopover/TagInfoButton';

export default {
    title: 'TagInfoButton',

    component: TagInfoButton,
    argTypes: {}
} as Meta;

const Template: Story<TagInfoButtonProps> = (args) => <TagInfoButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: {
        label: 'test',
        numberOfItems: 2,
        itemType: 'test',
        onTagInfoClicked: () => {
            console.log('ff');
        }
    }
};
