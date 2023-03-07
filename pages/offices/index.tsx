import {useEffect, useState} from "react";
import {getOffices} from "../../services/offices.service";
import Card from "../../shared/ui/card/Card";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {colorTheme} from "../../shared/colorUtils";
import ListOffices from "../../components/offices/ListOffices";

//import CreateUser from "../../components/users/CreateUser";


export default function Offices() {
    const [offices, setOffices] = useState<any[]>([]);
    useEffect(() => {
        getOffices().then(res => {
            setOffices(res.data)

        })

    }, [])

    const gotoCreateOffice = () => {
        window.location.href = '/offices/createOffice'
    }
    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row">
                    <div className="col-auto ms-auto">
                        <BtnPrimary icon={'plus'} iconSize={'20px'} tintColor={colorTheme.light}
                                    onClick={gotoCreateOffice}>Create Office</BtnPrimary>
                    </div>
                </div>
            </Card>
            <Card classCard={'mt-4'}>
                <ListOffices ListOffices={offices}/>
                {JSON.stringify(offices)}
            </Card>

        </div>
    )
}
