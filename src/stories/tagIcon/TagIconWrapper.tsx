import React from 'react';
import { getIcon } from '../../tagContextMenu/helpers';
import TagIcon from '../../tagContextMenu/TagIcon';
import TagIconShadowWrapper from '../../tagContextMenu/TagIconShadow';

export interface TagIconWrapperProps {
    icon: string;
    legendColor: string;
    shadow: boolean;
}

const TagIconWrapper: React.FC<TagIconWrapperProps> = ({ icon, legendColor, shadow }: TagIconWrapperProps) => {
    if (shadow) {
        return (
            <TagIconShadowWrapper>
                <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>
            </TagIconShadowWrapper>
        );
    } else {
        return <TagIcon icon={getIcon(icon)} legendColor={legendColor}></TagIcon>;
    }
};

export default TagIconWrapper;
