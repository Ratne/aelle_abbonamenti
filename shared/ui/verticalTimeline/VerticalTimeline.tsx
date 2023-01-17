import React from 'react';
import ItemTimeline from "./ItemTimeline";
import {itemTimelinesWrapModel} from "./ItemTimelineModel";

const VerticalTimeline = ({
                              list,
                              selectedPhase,
                              clickHandler
                          }: { list: itemTimelinesWrapModel[], selectedPhase?: any, clickHandler: (index: number) => void }) => {
    return (
        <div className={'vertical-timeline'}>
            {list.map((item: any, i: number) => (
                <ItemTimeline active={selectedPhase?.name === item.name} key={i} item={item}
                              rightTemplate={item?.template} clickHandler={() => clickHandler(i)}/>
            ))}
        </div>

    );
};

export default VerticalTimeline;
