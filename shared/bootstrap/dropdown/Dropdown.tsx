import React, {Fragment} from 'react';

const Dropdown = ({
                      itemTitle,
                      list,
                      onClickHandler
                  }: { itemTitle: any, list: { id?: string, name?: string, title: string, action?: string, hasDivider?: boolean }[], onClickHandler: (action: string, id?: string) => void }) => {
    return (
        <div className="sh custom-dropdown btn-group dropend">
            <a href="#" className="d-flex align-items-center text-light text-decoration-none dropdown-toggle"
               id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                {itemTitle}
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
                {list.map((ele, i) => (
                    <Fragment key={i}>
                        {ele.hasDivider &&
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>}
                        <li><a className="dropdown-item" href="#"
                               onClick={() => ele.action && onClickHandler(ele.action, ele?.id)}>{ele.title}</a></li>
                    </Fragment>
                ))}
            </ul>
        </div>
    );
};


export default Dropdown;
