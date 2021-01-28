import React, { CSSProperties } from 'react';
import { getIcon } from '../helpers/getIcon';
import TagContextMenu from '../tagContextMenu/TagContextMenu';
import TagIcon from '../tagIcon/TagIcon';
import style from './tagContextOverlay.module.css';

interface TagContextOverlayProps {
    icon: string;
    legendColor: string;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    tagNo: string;
    description: string;
    positionStyle: CSSProperties;
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
    positionStyle,
    openTagInformation,
    children
}: TagContextOverlayProps) => {
    return (
        <div style={positionStyle} className={style.wrapper}>
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
