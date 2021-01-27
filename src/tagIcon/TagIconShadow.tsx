import React from 'react';
import styles from './tagIcon.module.css';

interface TagIconShadowWrapperProps {
    children: React.ReactNode;
}

const TagIconShadowWrapper: React.FC<TagIconShadowWrapperProps> = ({ children }: TagIconShadowWrapperProps) => {
    return <div className={`${styles.shadow}`}>{children}</div>;
};

export default TagIconShadowWrapper;
