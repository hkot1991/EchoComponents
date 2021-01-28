import React, { CSSProperties, useState } from 'react';
import TagMoreInfo from '../../tagContextMenu/TagMoreInfo';
import TagContextOverlay from '../../tagContextOverlay/TagContextOverlay';
import { TagInfoData } from '../../types/tagInfoData';

export interface TagContextOverlayWrapperProps {
    dataToShow: TagInfoData[];
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    position: CSSProperties;
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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openTagInformation = (): void => {
        setExpanded(!expanded);
    };

    const fetchDataToShow = (): void => {
        setIsLoading(true);
        setFetchedDataToShow([]);

        setTimeout(function () {
            setFetchedDataToShow(dataToShow);
            setIsLoading(false);
        }, 3000);
    };

    return (
        <TagContextOverlay
            icon={icon}
            legendColor={legendColor}
            expanded={expanded}
            setExpanded={setExpanded}
            tagNo={tagNo}
            description={description}
            positionStyle={position}
            openTagInformation={openTagInformation}
        >
            <TagMoreInfo fetchDataToShow={fetchDataToShow} isLoading={isLoading} fetchedData={fetchedDataToShow} />
        </TagContextOverlay>
    );
};

export default TagContextOverlayWrapper;
