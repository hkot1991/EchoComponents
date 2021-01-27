import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagPopover, { TagPopoverProps } from '../../tagPopover/TagPopover';

export default {
    title: 'TagPopover',

    component: TagPopover,
    argTypes: {}
} as Meta;

const Template: Story<TagPopoverProps> = (args) => <TagPopover {...args} />;

export const Default = Template.bind({});

Default.args = {
    dataToShow: [
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'test',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        },
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'M1',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        },
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'M2',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        },
        {
            itemType: '1',
            numberOfItems: 2,
            label: 'Loop',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        },
        {
            itemType: '2',
            numberOfItems: 5,
            label: 'P&ID',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        },
        {
            itemType: '2',
            numberOfItems: 1,
            label: 'Layout',
            onTagInfoClicked: () => {
                console.log('ff');
            }
        }
    ]
};
