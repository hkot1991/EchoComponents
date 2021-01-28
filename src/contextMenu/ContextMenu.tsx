import React, { CSSProperties } from 'react';
import { getIcon } from '../helpers/getIcon';
import TagContextMenu from '../tagContextMenu/TagContextMenu';
import TagIcon from '../tagIcon/TagIcon';
import style from './contextMenu.module.css';

interface ContextMenuProps {
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

export const ContextMenu: React.FC<ContextMenuProps> = ({
    icon,
    expanded,
    legendColor,
    setExpanded,
    tagNo,
    description,
    positionStyle,
    openTagInformation,
    children
}: ContextMenuProps) => {
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

export default ContextMenu;
