import { DotProgress } from '@equinor/eds-core-react';
import React from 'react';
import { DataInformation } from '../types/dataInformation';
import DataInfoButton from './DataInfoButton';
import style from './dataInfoPopover.module.css';

export interface DataInfoPopoverProps {
    dataToShow: DataInformation[];
    isLoading: boolean;
}

export const DataInfoPopover: React.FC<DataInfoPopoverProps> = ({ dataToShow, isLoading }: DataInfoPopoverProps) => {
    const getDataGroupings = dataToShow.reduce((dictionary: { [itemType: string]: DataInformation[] }, current) => {
        if (!dictionary[current.itemType]) {
            dictionary[current.itemType] = [current];
        } else {
            dictionary[current.itemType] = [...dictionary[current.itemType], current];
        }
        return dictionary;
    }, {});

    return (
        <div className={style.wrapper}>
            <div className={style.arrow}></div>
            <div className={style.optionsPopover}>
                {isLoading && dataToShow.length === 0 && <DotProgress variant="white" />}
                {Object.keys(getDataGroupings).map((key) => {
                    return (
                        <div key={key} className={style.groupWrapper}>
                            {getDataGroupings[key].map((data, index) => {
                                return <DataInfoButton data={data} key={index} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataInfoPopover;
