import {useEffect, useState} from "react";
import {getProducts} from "../../services/products.service";
import Card from "../../shared/ui/card/Card";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {colorTheme} from "../../shared/colorUtils";
import ListProduct from "../../components/products/ListProduct";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data)

        })

    }, [])

    const gotoCreateProd = () => {
        window.location.href = '/products/createProduct'
    }
    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row">
                    <div className="col-auto ms-auto">
                        <BtnPrimary icon={'plus'} iconSize={'20px'} tintColor={colorTheme.light}
                                    onClick={gotoCreateProd}>Create Product</BtnPrimary>
                    </div>
                </div>
            </Card>
            <Card classCard={'mt-4'}>
                <ListProduct listProd={products}/>
                {JSON.stringify(products)}
            </Card>
        </div>
    )
}
