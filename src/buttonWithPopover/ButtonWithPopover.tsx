import { themeConst } from '@equinor/echo-framework';
import { Button, CircularProgress } from '@equinor/eds-core-react';
import React, { useState } from 'react';
import DataInfoPopover from '../contextMenuPopover/DataInfoPopover';
import { Icon } from '../icon/Icon';
import { DataInformation } from '../types/dataInformation';
import style from './buttonWithPopover.module.css';

export interface ButtonWithPopoverProps {
    fetchDataToShow: () => void;
    fetchedData: DataInformation[];
    isLoading: boolean;
}

export const ButtonWithPopover: React.FC<ButtonWithPopoverProps> = ({
    fetchDataToShow,
    fetchedData,
    isLoading
}: ButtonWithPopoverProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const renderPopoverButton = (): JSX.Element => {
        if (!expanded) {
            return <Icon name="more_horizontal" title="more options" color={themeConst.asBuilt}></Icon>;
        } else {
            return <Icon name="close" title="close more options" color={themeConst.asBuilt}></Icon>;
        }
    };

    const onShowMoreClicked = (): void => {
        fetchDataToShow();
        setExpanded(!expanded);
    };

    return (
        <div className={style.wrapper}>
            {expanded && isLoading ? (
                <div className={style.button}>
                    <CircularProgress className={style.spinner} />
                </div>
            ) : (
                <Button className={style.button} variant="ghost_icon" onClick={onShowMoreClicked}>
                    {renderPopoverButton()}
                </Button>
            )}

            {expanded && <DataInfoPopover isLoading={isLoading} dataToShow={fetchedData} />}
        </div>
    );
};

export default ButtonWithPopover;
