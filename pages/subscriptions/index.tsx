import {useEffect, useState} from "react";
import {getSubscriptions} from "../../services/subscriptions";
import Card from "../../shared/ui/card/Card";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {colorTheme} from "../../shared/colorUtils";
import ListSubscription from "../../components/subscriptions/ListSubscription";


export default function Products() {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);
    useEffect(() => {
        getSubscriptions().then(res => {
            setSubscriptions(res.data)

        })

    }, [])

    const gotoCreateSub = () => {
        window.location.href = '/subscriptions/createSubscription'
    }
    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row">
                    <div className="col-auto ms-auto">
                        <BtnPrimary icon={'plus'} iconSize={'20px'} tintColor={colorTheme.light}
                                    onClick={gotoCreateSub}>Create Subscription</BtnPrimary>
                    </div>
                </div>
            </Card>
            <Card classCard={'mt-4'}>
                <ListSubscription listSub={subscriptions}/>
                {JSON.stringify(subscriptions)}
            </Card>
        </div>

    )
}
