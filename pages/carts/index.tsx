import {useEffect, useState} from "react";
import {getOffices} from "../../services/offices.service";
import Card from "../../shared/ui/card/Card";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {colorTheme} from "../../shared/colorUtils";
import ListOffices from "../../components/offices/ListOffices";
import ListCarts from "../../components/carts/ListCarts";

//import CreateUser from "../../components/users/CreateUser";


export default function Carts() {
    const [carts, setCarts] = useState<any[]>([]);
    useEffect(() => {
        /* getCarts().then(res => {
             setCarts(res.data)

         })*/

    }, [])

    const gotoCreateCart = () => {
        window.location.href = '/offices/createCart'
    }
    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row">
                    <div className="col-auto ms-auto">
                        <BtnPrimary icon={'plus'} iconSize={'20px'} tintColor={colorTheme.light}
                                    onClick={gotoCreateCart}>Create Cart</BtnPrimary>
                    </div>
                </div>
            </Card>
            <Card classCard={'mt-4'}>
                <ListCarts listCarts={carts}/>
                {JSON.stringify(carts)}
            </Card>

        </div>
    )
}
