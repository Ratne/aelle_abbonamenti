import React, {useState} from 'react';
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

interface navItemModel {
    name: string,
    label: string,
    icon: string,
    link: string,
    isActive: boolean
    action?: () => void,
    child?: navItemModel[]
}

const NavItem = ({item}: { item: navItemModel }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <li className="nav-item mb-1">
            <button className={`btn btn-toggle align-items-center w-100 ${isCollapsed ? 'collapsed' : ''}`}
                    onClick={() => item.action ? item.action() : setIsCollapsed(!isCollapsed)}
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse" aria-expanded={!isCollapsed}>
                <a
                    href={!item.child ? item.link : undefined}
                    className={`nav-link d-flex align-items-center w-100 ${item.isActive ? 'active' : ''}`}
                    aria-current="page">
                    <IconSVG icon={item.icon} size={'24px'} tintColor={colorTheme.dark}/>
                    <span className={'ms-2'}>{item.label}</span>
                    {item?.child && <IconSVG icon={isCollapsed ? 'chevron-down' : 'chevron-up'} size={'16px'}
                                             tintColor={colorTheme.dark} className={'ms-auto'}/>}

                </a></button>
            {item?.child && <div className={`collapse ${isCollapsed ? '' : 'show'}`} id="home-collapse">
                <ul className={"btn-toggle-nav list-unstyled fw-normal pb-1 small"}>
                    {item?.child.map((ele, key) => (
                        <li key={key}><a href={ele.link} className="rounded">{ele.label}</a></li>
                    ))}
                </ul>
            </div>}

        </li>
    );
};

export default NavItem;

//href={item.link}
