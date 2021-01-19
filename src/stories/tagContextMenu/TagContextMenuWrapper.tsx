import React from 'react';
import { getIcon } from '../../tagContextMenu/helpers';
import TagContextMenu, { Position } from '../../tagContextMenu/TagContextMenu';
import TagIcon from '../../tagContextMenu/TagIcon';

export interface TagContextMenuWrapperProps {
    icon: string;
    legendColor: string;
    tagNo: string;
    description: string;
    position: Position;
}

const TagContextMenuWrapper: React.FC<TagContextMenuWrapperProps> = ({
    icon,
    legendColor,
    tagNo,
    description,
    position
}: TagContextMenuWrapperProps) => {
    return (
        <TagContextMenu tagNo={tagNo} description={description} position={position}>
            <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
        </TagContextMenu>
    );
};

export default TagContextMenuWrapper;
