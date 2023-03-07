import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import Card from "../../shared/ui/card/Card";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {colorTheme} from "../../shared/colorUtils";
import ListUsers from "../../components/users/ListUsers";


export default function Users() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data)
            console.log(res)
        })
    }, [])

    const gotoCreateUser = () => {
        window.location.href = '/users/createUser'
    }
    return (
        <div>
            <Card classCard={'heading-card'}>
                <div className="row">
                    <div className="col-auto ms-auto">
                        <BtnPrimary icon={'users'} iconSize={'20px'} tintColor={colorTheme.light}
                                    onClick={gotoCreateUser}>Create
                            Customer</BtnPrimary>
                    </div>
                </div>
            </Card>
            <Card classCard={'mt-4'}>
                <ListUsers listUsers={users}/>
                {JSON.stringify(users)}
            </Card>
        </div>
    )
}
