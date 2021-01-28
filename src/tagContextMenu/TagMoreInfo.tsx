import { themeConst } from '@equinor/echo-framework';
import { Button, CircularProgress } from '@equinor/eds-core-react';
import React, { useState } from 'react';
import { Icon } from '../icon/Icon';
import TagPopover from '../tagPopover/TagPopover';
import { TagInfoData } from '../types/tagInfoData';
import style from './tagMoreInfo.module.css';

export interface TagMoreInfoProps {
    fetchDataToShow: () => void;
    fetchedData: TagInfoData[];
    isLoading: boolean;
}

export const TagMoreInfo: React.FC<TagMoreInfoProps> = ({
    fetchDataToShow,
    fetchedData,
    isLoading
}: TagMoreInfoProps) => {
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

            {expanded && <TagPopover isLoading={isLoading} dataToShow={fetchedData} />}
        </div>
    );
};

export default TagMoreInfo;
