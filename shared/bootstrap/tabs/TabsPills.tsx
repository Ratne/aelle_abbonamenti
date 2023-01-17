import React from 'react';
import {TabPillsModel} from "./TabsModel";

const TabsPills = ({
                       list,
                       clickHandler,
                       linkActive
                   }:
                       TabPillsModel) => {
        return (
            <div className={
                "sh tab-pills"
            }
            >
                <ul className="nav nav-pills secondary">
                    {
                        list.map((item, i) => (
                            <li key={i} className="nav-item">
                                <a className={`nav-link ${linkActive === item.link ? 'active' : ''}`} aria-current="page"
                                   onClick={() => clickHandler(item.link)}>{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
            ;
    }
;

export default TabsPills;
