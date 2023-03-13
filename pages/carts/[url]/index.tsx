import {useEffect, useState} from "react";
import {getSingleCartByUrl} from "../../../services/carts.service";
import {useRouter} from "next/router";
import Card from "../../../shared/ui/card/Card";

//import CreateUser from "../../components/users/CreateUser";


export default function CartPage() {
    const router = useRouter();
    const {url} = router.query;
    useEffect(() => {
        getSingleCartByUrl(url as string).then(res => {
            //debugger;
        })
    }, [])


    
    return (
        <div>
            <Card>
                Carrello
            </Card>
        </div>
    )
}
