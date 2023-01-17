import React from 'react';
import {IconSVG} from "../../ui/icon/IconSVG";
import {ListBreadcrumbModel} from "./BreadcrumbModel";

const Breadcrumb = ({
                        list,
                        currentPage,
                        goToHandler
                    }: { list: ListBreadcrumbModel[], currentPage: string, goToHandler: (name: string) => void }) => {
    return (
        <nav style={{"--bs-breadcrumb-divider": "'>'"} as any} aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item pointer"><a onClick={() => goToHandler('/')}>
                    <IconSVG icon={'home'} size={"16px"}/></a>
                </li>
                {list.map((item, i) => (
                    <li key={i} className={`breadcrumb-item ${currentPage === item.name ? "active" : "pointer"} `}
                        aria-current="page"
                        onClick={() => currentPage !== item.name && goToHandler(item?.name)}>{item?.title || ''}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
