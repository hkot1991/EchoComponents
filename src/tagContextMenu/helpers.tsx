import React from 'react';
import { ReactComponent as Cable } from '../icons/tags/Cable-icon.svg';
import { ReactComponent as CircuitStarter } from '../icons/tags/Circuit-icon.svg';
import { ReactComponent as ElectricalIcon } from '../icons/tags/Electrical-icon.svg';
import { ReactComponent as Function } from '../icons/tags/Function-icon.svg';
import { ReactComponent as Instrument } from '../icons/tags/Instrument-icon.svg';
import { ReactComponent as JunctionBox } from '../icons/tags/JunctionBox-icon.svg';
import { ReactComponent as Line } from '../icons/tags/Line-icon.svg';
import { ReactComponent as MainEquipment } from '../icons/tags/MainEquipment-icon.svg';
import { ReactComponent as ManualValve } from '../icons/tags/ManualValve-icon.svg';
import { ReactComponent as Signal } from '../icons/tags/Signal-icon.svg';
import { ReactComponent as Tag } from '../icons/tags/Tag-icon.svg';
import { ReactComponent as Telecom } from '../icons/tags/Telecom-icon.svg';

export function getIcon(
    iconType:
        | 'Electrical'
        | 'Main Equipment'
        | 'Line'
        | 'Manual Valve'
        | 'Circuit/Starter'
        | 'Instrument'
        | 'Cable'
        | 'Function'
        | 'Signal'
        | 'Telecom'
        | 'Junction Box'
        | 'Administrative'
        | string
): JSX.Element {
    switch (iconType) {
        case 'Electrical':
            return <ElectricalIcon />;
        case 'Main Equipment':
            return <MainEquipment />;
        case 'Line':
            return <Line />;
        case 'Manual Valve':
            return <ManualValve />;
        case 'Circuit/Starter':
            return <CircuitStarter />;
        case 'Cable':
            return <Cable />;
        case 'Instrument':
            return <Instrument />;
        case 'Function':
            return <Function />;
        case 'Signal':
            return <Signal />;
        case 'Telecom':
            return <Telecom />;
        case 'Junction Box':
            return <JunctionBox />;
        case 'Administrative':
            return <Tag />;
        default:
            return <Tag />;
    }
}
