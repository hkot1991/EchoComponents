import React, { useState } from 'react';
import { getIcon } from '../../helpers/getIcon';
import TagContextMenu from '../../tagContextMenu/TagContextMenu';
import TagIcon from '../../tagIcon/TagIcon';

export interface TagContextMenuWrapperProps {
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
}

const TagContextMenuWrapper: React.FC<TagContextMenuWrapperProps> = ({
    icon,
    legendColor,
    tagNo,
    description
}: TagContextMenuWrapperProps) => {
    const [expanded, setExpanded] = useState(false);

    const openTagInformation = (): void => {
        setExpanded(!expanded);
    };

    return (
        <TagContextMenu
            setExpanded={setExpanded}
            openTagInformation={openTagInformation}
            tagNo={tagNo}
            description={description}
            expanded={expanded}
        >
            <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
        </TagContextMenu>
    );
};

export default TagContextMenuWrapper;
