import React, { useState } from 'react';
import { Position } from '../../tagContextMenu/TagContextMenu';
import TagMoreInfo from '../../tagContextMenu/TagMoreInfo';
import TagContextOverlay from '../../tagContextOverlay/TagContextOverlay';
import { TagInfoData } from '../../tagPopover/TagPopover';

export interface TagContextOverlayWrapperProps {
    dataToShow: TagInfoData[];
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    position: Position;
}

const TagContextOverlayWrapper: React.FC<TagContextOverlayWrapperProps> = ({
    dataToShow,
    icon,
    legendColor,
    tagNo,
    description,
    position
}: TagContextOverlayWrapperProps) => {
    const [fetchedDataToShow, setFetchedDataToShow] = useState<TagInfoData[]>([]);
    const [expanded, setExpanded] = useState(false);

    const openTagInformation = (): void => {
        setExpanded(!expanded);
    };

    const fetchDataToShow = (): void => {
        setFetchedDataToShow(dataToShow);
    };

    return (
        <TagContextOverlay
            icon={icon}
            legendColor={legendColor}
            expanded={expanded}
            setExpanded={setExpanded}
            tagNo={tagNo}
            description={description}
            position={position}
            openTagInformation={openTagInformation}
        >
            <TagMoreInfo fetchDataToShow={fetchDataToShow} isLoading={false} fetchedData={fetchedDataToShow} />
        </TagContextOverlay>
    );
};

export default TagContextOverlayWrapper;
