import React, { useState } from 'react';
import TagInfoButton from './TagInfoButton';
import style from './tagPopover.module.css';

export interface TagPopoverProps {
    dataToShow: TagInfoData[];
    parentRef: React.RefObject<HTMLButtonElement>;
}

export interface TagInfoData {
    numberOfItems: number;
    label: string;
    //alt-text optional
    onTagInfoClicked: () => void;
    itemType: string;
    //TODO: className for button style (includes hover), optional
    // type: document/notification/checklist
}

export const TagPopover: React.FC<TagPopoverProps> = ({ dataToShow, parentRef }: TagPopoverProps) => {
    //TODO: remove some divs
    const [popoverStyle, setPopoverStyle] = useState();
    const getDataGroupings = dataToShow.reduce((dictionary: { [itemType: string]: TagInfoData[] }, current) => {
        if (dictionary[current.itemType] === undefined) {
            dictionary[current.itemType] = [current];
        } else {
            dictionary[current.itemType] = [...dictionary[current.itemType], current];
        }
        return dictionary;
    }, {});
    // useEffect(() => {
    //     console.log('useeffect', parentRef);
    //     // if (parentRef.current) {
    //     //     const top = parentRef.current.getClientRects()[0].top;
    //     //     const left = parentRef.current.getClientRects()[0].left;
    //     //     setPopoverStyle({
    //     //         top,
    //     //         left
    //     //     } as any);
    //     }
    // }, [parentRef]);

    return (
        <div className={style.wrapper} style={popoverStyle ?? {}}>
            <div className={style.arrow}></div>
            <div className={style.optionsPopover}>
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
