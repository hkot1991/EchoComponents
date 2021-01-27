import { Button } from '@equinor/eds-core-react';
import React from 'react';
import style from './tagInfoButton.module.css';
import { TagInfoData } from './TagPopover';

export interface TagInfoButtonProps {
    data: TagInfoData;
}

export const TagInfoButton: React.FC<TagInfoButtonProps> = ({ data }: TagInfoButtonProps) => {
    return (
        <div className={style.buttonWrapper} onClick={data.onTagInfoClicked}>
            <Button
                className={style.button}
                variant="ghost_icon"
                data-count={data.numberOfItems > 99 ? '99+' : data.numberOfItems}
            >
                {data.label}
            </Button>
        </div>
    );
};

export default TagInfoButton;
