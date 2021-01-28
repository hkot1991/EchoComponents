import { Button } from '@equinor/eds-core-react';
import React from 'react';
import { DataInformation } from '../types/dataInformation';
import style from './dataInfoButton.module.css';

export interface DataInfoButtonProps {
    data: DataInformation;
}

export const DataInfoButton: React.FC<DataInfoButtonProps> = ({ data }: DataInfoButtonProps) => {
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

export default DataInfoButton;
