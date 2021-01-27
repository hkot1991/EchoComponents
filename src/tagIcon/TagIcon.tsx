import React from 'react';
import styles from './tagIcon.module.css';

interface TagIconProps {
    icon: JSX.Element;
    legendColor: string;
}

export const TagIcon: React.FC<TagIconProps> = ({ icon, legendColor }: TagIconProps) => {
    return (
        <div style={{ background: legendColor }} className={`${styles.icon}`}>
            {icon}
        </div>
    );
};

export default TagIcon;
