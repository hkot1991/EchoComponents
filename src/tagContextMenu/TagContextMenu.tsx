import React, { useState } from 'react';
import styles from './tagContextMenu.module.css';
import TagIconShadowWrapper from './TagIconShadow';

interface TagContextMenuProps {
    tagNo: string;
    description: string;
    children: React.ReactNode;
    position: Position;
}

export interface Position {
    left: string;
    top: string;
}

export const TagContextMenu: React.FC<TagContextMenuProps> = ({
    tagNo,
    description,
    position,
    children
}: TagContextMenuProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const openTagInformation = () => {
        console.log('HHH');
    };

    if (expanded) {
        return (
            <div
                style={position}
                className={styles.contextWrapperExpanded}
                // todo: remove this
                onClick={(): void => {
                    setExpanded(false);
                }}
            >
                <div className={styles.tagActive} onClick={openTagInformation}>
                    {children}
                    <div className={styles.heading}>
                        <h5 className={styles.tagText}>{tagNo}</h5>
                        <div>{description}</div>
                    </div>
                    <div className={styles.tagInfoIcon}>
                        {/* <Button variant="ghost_icon">
                            <Icon name="info_circle" title="tag information"></Icon>
                        </Button> */}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                style={position}
                className={styles.contextWrapper}
                onClick={(): void => {
                    setExpanded(true);
                }}
            >
                <TagIconShadowWrapper>{children}</TagIconShadowWrapper>
            </div>
        );
    }
};

export default TagContextMenu;
