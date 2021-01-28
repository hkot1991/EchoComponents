import { DotProgress } from '@equinor/eds-core-react';
import React from 'react';
import { TagInfoData } from '../types/tagInfoData';
import TagInfoButton from './TagInfoButton';
import style from './tagPopover.module.css';

export interface TagPopoverProps {
    dataToShow: TagInfoData[];
    isLoading: boolean;
}

export const TagPopover: React.FC<TagPopoverProps> = ({ dataToShow, isLoading }: TagPopoverProps) => {
    const getDataGroupings = dataToShow.reduce((dictionary: { [itemType: string]: TagInfoData[] }, current) => {
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
                                return <TagInfoButton data={data} key={index} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TagPopover;
