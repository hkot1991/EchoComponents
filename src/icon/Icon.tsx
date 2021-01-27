/* eslint-disable @typescript-eslint/camelcase */
import { Icon as EdsIcon } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import React from 'react';

export interface IconProps {
    name: string;
    title: string;
    color: string;
}

export const Icon: React.FC<IconProps> = ({ name, title, color }: IconProps) => {
    EdsIcon.add({
        info_circle
    });

    return <EdsIcon name={name} title={title} color={color} />;
};
