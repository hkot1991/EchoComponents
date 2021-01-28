import { Button } from '@equinor/eds-core-react';
import React from 'react';
import { TagInfoData } from '../types/tagInfoData';
import style from './tagInfoButton.module.css';

export interface TagInfoButtonProps {
    data: TagInfoData;
}

const TagInfoButton: React.FC<TagInfoButtonProps> = ({ data }: TagInfoButtonProps) => {
    return (
        <Button
            aria-label={data.ariaLabel ?? data.label}
            onClick={data.onTagInfoClicked}
            className={`${data.itemButtonClassName} ${style.button} ${
                data.numberOfItems > 1 ? style.buttonWithBadge : ''
            }`}
            variant="ghost_icon"
            data-count={data.numberOfItems > 99 ? '99+' : data.numberOfItems}
        >
            {data.label}
        </Button>
    );
};

export default TagInfoButton;
