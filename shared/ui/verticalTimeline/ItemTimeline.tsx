import React, {ReactNode} from 'react';
import {IconSVG} from "../icon/IconSVG";
import {itemTimelinesModel} from "./ItemTimelineModel";
import {colorTheme} from "../../colorUtils";


const ItemTimeline = ({
                          item,
                          active,
                          rightTemplate,
                          clickHandler
                      }: { item: itemTimelinesModel, active?: boolean, rightTemplate?: ReactNode, clickHandler: (name: string) => void }) => {

    const iconTemplate: any = {
        complete: 'done',
        inProgress: 'wait',
        notComplete: 'not',
    }

    return (

        <div className={`item-timeline ${(active ? 'active' : (item.state !== 'notComplete' ? 'pointer' : ''))}`}
             onClick={() => item.state !== 'notComplete' && clickHandler(item.name)}>
            <div className={'timeline'}>
                <IconSVG icon={iconTemplate[item.state]} className={'icon-timeline'} size={'26px'}
                         tintColor={item.state === 'notComplete' ? colorTheme.gray : ''}/>
                <div className={'vertical-line'}
                     style={{borderColor: item.state === 'notComplete' || item.state === 'inProgress' ? colorTheme.gray : ''}}></div>
            </div>
            <div className={'label-timeline'}>
                <div>
                    {item.label}
                    <div className={'sub-label'}> {item?.date}</div>
                </div>
                <div>
                    {rightTemplate && rightTemplate}{active &&
                    <IconSVG icon={'select-right'} size={'20px'} className={'ms-3'}/>}
                </div>
            </div>
        </div>


    );
};

export default ItemTimeline;
