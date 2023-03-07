import type {NextPage} from "next";
import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/router";
// import {sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import LoginContainer from "../components/login/LoginContainer";
import http from "../shared/utils/http";
import {useAppDispatch} from "../store/hooks";
import {loginAction} from "../store/authSlice";
// import RecoverPasswordContainer from "../components/login/RecoverPasswordContainer";
// import {addErrorMessage, addSuccessMessage, resetErrors} from "../store/store";

const Login: NextPage = ({auth, isLogged}: any) => {
    const router = useRouter();
    const [showLogin, setShowLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const loginHandler = (dataForm: any) => {
        setIsLoading(true)
        http.post('/api/login', dataForm).then(res => {
            localStorage.setItem('token', res.token);
            dispatch(loginAction(res.user))
            setIsLoading(false)
        }, err => {
            setIsLoading(false)
        })
    }

    return (
        <div className={"container"}>
            <div className={"row justify-content-center"}>
                <div className={"col-xl-4 col-lg-6 col-md-8 col-sm-12"}>

                        <LoginContainer loginHandler={loginHandler} goToRecoverPswHandler={() => setShowLogin(false)}
                                        isLoading={isLoading}/>

                </div>
            </div>
        </div>
    )
}

export default Login;
