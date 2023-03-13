import React from 'react';
import NavItem from "./NavItem";
import {useAppDispatch} from "../../store/hooks";
import {logoutAction} from "../../store/authSlice";


const SidebarMenu = ({user}: { user?: any }) => {
    const dispatch = useAppDispatch();
    const logoutHandler = () => {
        dispatch(logoutAction());
    }
    const listMenu = [
        {
            name: 'customers',
            label: 'Customers',
            icon: 'users',
            link: '/users',
            isActive: false,
        },
        {
            name: 'products',
            label: 'Products',
            icon: 'product',
            link: '/products',
            isActive: false,
        },
        {
            name: 'offices',
            label: 'Offices',
            icon: 'shop',
            link: '/offices',
            isActive: false,
        },
        {
            name: 'subscriptions',
            label: 'Subscriptions',
            icon: 'magazine',
            link: '/subscriptions',
            isActive: false,
        },
        {
            name: 'cart',
            label: 'Cart',
            icon: 'cart',
            link: '/cart',
            isActive: false,
        },
        /* {
             name: 'aaa',
             label: 'Aziende',
             icon: 'shop',
             link: '/pizzerie',
             isActive: false,
             child: [
                 {
                     name: 'list',
                     label: 'Lista',
                     icon: '',
                     link: '/pizzerie',
                     isActive: true,
                 },
                 {
                     name: 'add',
                     label: 'Aggiungi',
                     icon: '',
                     link: '/pizzerie/create',
                     isActive: false,
                 }
             ]
         },*/
        {
            name: 'logout',
            label: 'Logout',
            icon: 'logout',
            action: logoutHandler,
            link: '/',
            isActive: false,
        },
    ]
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow sidebar"
             style={{"width": "280px", "height": 'auto'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0">
                {/*<Image src={logo} alt="logo" width={'240'}/>*/}
                <div className={'box-logo'}>
                    farmaciadinardolabrozzi
                </div>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">

                {listMenu.map((ele, key) => <NavItem key={key} item={ele}/>)}
            </ul>
            <hr/>
        </div>
    );
};

export default SidebarMenu;
