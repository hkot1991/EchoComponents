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
/**
 * Component that renders full context menu functionality, meant for displaying tag context menu.
 * With the ability to provide more information button and related popover that should be wrapped with the context menu
 *
 * @param {ContextMenuProps} {
 *     icon: name of tag type icon to be displayed
 *     expanded: flag to determine if context menu should be expanded or not
 *     legendColor: color used for the tag icon
 *     setExpanded: method to update expanded flag
 *     tagNo: The tag number to display
 *     description: The tag description to display
 *     positionStyle: The position styling element used to position the context menu
 *     openTagInformation: Method that will be called when expanded context menu is clicked
 *     children: Related elements to display, e.g. more information button
 * }
 * @return {*} {JSX.Element} Context menu with relevant children wrapped
 */
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
}: ContextMenuProps): JSX.Element => {
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
