import React from 'react';
import { getIcon } from '../tagContextMenu/helpers';
import TagContextMenu, { Position } from '../tagContextMenu/TagContextMenu';
import TagIcon from '../tagIcon/TagIcon';
import style from './tagContextOverlay.module.css';

interface TagContextOverlayProps {
    icon: string;
    legendColor: string;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    tagNo: string;
    description: string;
    position: Position;
    openTagInformation: () => void;
    children?: React.ReactNode;
}

const TagContextOverlay: React.FC<TagContextOverlayProps> = ({
    icon,
    expanded,
    legendColor,
    setExpanded,
    tagNo,
    description,
    position,
    openTagInformation,
    children
}: TagContextOverlayProps) => {
    return (
        <div style={position} className={style.wrapper}>
            <TagContextMenu
                setExpanded={setExpanded}
                openTagInformation={openTagInformation}
                tagNo={tagNo}
                description={description}
                expanded={expanded}
            >
                <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
            </TagContextMenu>
            {expanded && children}
        </div>
    );
};

export default TagContextOverlay;
