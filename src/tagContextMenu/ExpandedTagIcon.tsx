import React from 'react';

interface ExpandedTagIconProps {
    icon: JSX.Element;
}

const ExpandedTagIcon: React.FC<ExpandedTagIconProps> = ({ icon }: ExpandedTagIconProps) => {
    return <div>{icon}</div>;
};

export default ExpandedTagIcon;
