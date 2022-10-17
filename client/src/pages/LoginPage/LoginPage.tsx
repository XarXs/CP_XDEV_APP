import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from "../../components/InputComponent/InputComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import './LoginPage.scss';

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        fetch('http://localhost:4001/api/v1/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const result = data.result;
                if (result.code === 200) {
                    const token = result.tokenId;
                    localStorage.setItem("token", token);
                    navigate('/chat');
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div className={"login-page"}>
            LoginPage
            <form onSubmit={handleSubmit}>
                <InputComponent
                    label={"Username"}
                    name={"username"}
                />
                <InputComponent
                    label={"Password"}
                    name={"password"}
                />
                <ButtonComponent type={"submit"}>Login</ButtonComponent>
            </form>
        </div>
    );
}

export default LoginPage;
