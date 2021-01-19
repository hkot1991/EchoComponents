import { Icon as EdsIcon } from '@equinor/eds-core-react';
import { info_circle } from '@equinor/eds-icons';
import React from 'react';

export interface IconProps {
    name: string;
    title: string;
}

export const Icon: React.FC<IconProps> = ({ name, title }: IconProps) => {
    EdsIcon.add({
        info_circle
    });

    return <EdsIcon name={name} title={title} />;
};
