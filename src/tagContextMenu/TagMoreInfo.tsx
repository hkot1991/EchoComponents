import { themeConst } from '@equinor/echo-framework';
import { Button } from '@equinor/eds-core-react';
import React, { useState } from 'react';
import { Icon } from '../icon/Icon';
import TagPopover, { TagInfoData } from '../tagPopover/TagPopover';
import style from './tagMoreInfo.module.css';

export interface TagMoreInfoProps {
    fetchDataToShow: () => void;
    isLoading: boolean;
    fetchedData: TagInfoData[];
}

export const TagMoreInfo: React.FC<TagMoreInfoProps> = ({ fetchDataToShow, fetchedData }: TagMoreInfoProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const moreInfoRef = React.createRef<HTMLButtonElement>();

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
            <Button className={style.button} variant="ghost_icon" ref={moreInfoRef} onClick={onShowMoreClicked}>
                {renderPopoverButton()}
            </Button>
            {expanded && <TagPopover dataToShow={fetchedData} parentRef={moreInfoRef} />}
        </div>
    );
};

export default TagMoreInfo;
