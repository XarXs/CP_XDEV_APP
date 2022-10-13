import React from 'react';
import './LoginPage.scss';
import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

function LoginPage() {
    return(
        <div className={"login-page"}>
            LoginPage
            <form>
                <InputComponent
                    label={"Username"}
                    name={"username"}
                />
                <InputComponent
                    label={"Password"}
                    name={"password"}
                />
                <ButtonComponent value={"Login"}/>
            </form>
        </div>
    );
}

export default LoginPage;
