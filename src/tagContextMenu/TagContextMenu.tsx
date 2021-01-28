import { themeConst } from '@equinor/echo-framework';
import { Button, Typography } from '@equinor/eds-core-react';
import React from 'react';
import { Icon } from '../icon/Icon';
import TagIconShadowWrapper from '../tagIcon/TagIconShadow';
import styles from './tagContextMenu.module.css';

interface TagContextMenuProps {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
    tagNo: string;
    description: string;
    openTagInformation: () => void;
    children: React.ReactNode;
}

export const TagContextMenu: React.FC<TagContextMenuProps> = ({
    expanded,
    setExpanded,
    tagNo,
    description,
    openTagInformation,
    children
}: TagContextMenuProps) => {
    if (expanded) {
        return (
            <div className={styles.contextWrapperExpanded} onClick={openTagInformation}>
                <div className={styles.tagInfoWrapper}>
                    {children}
                    <div className={styles.tagText}>
                        <Typography variant="h5" className={styles.tagHeader}>
                            {tagNo}
                        </Typography>
                        <Typography variant="body_short" className={styles.tagDescription}>
                            {description}
                        </Typography>
                    </div>
                    <div className={styles.tagInfoIcon}>
                        <Button variant="ghost_icon">
                            <Icon name="info_circle" title="tag information" color={themeConst.asBuilt}></Icon>
                        </Button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
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
