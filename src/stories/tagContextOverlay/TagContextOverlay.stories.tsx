import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TagContextOverlayWrapper, { TagContextOverlayWrapperProps } from './TagContextOverlayWrapper';

export default {
    title: 'TagContextOverlay',

    component: TagContextOverlayWrapper,
    argTypes: {
        legendColor: { control: 'color' },
        icon: {
            control: {
                type: 'select',
                options: [
                    'Electrical',
                    'Main Equipment',
                    'Line',
                    'Manual Valve',
                    'Circuit/Starter',
                    'Cable',
                    'Instrument',
                    'Function',
                    'Signal',
                    'Telecom',
                    'Junction Box',
                    'Administrative',
                    'Other'
                ]
            }
        },
        position: { control: { type: 'object' } }
    }
} as Meta;

const Template: Story<TagContextOverlayWrapperProps> = (args) => <TagContextOverlayWrapper {...args} />;

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
    ],
    icon: 'Electrical',
    legendColor: '#007079',
    tagNo: 'D-11PSSV0803',
    description: 'CEMENT UNIT',
    position: { left: '20px', top: '20px' }
};
