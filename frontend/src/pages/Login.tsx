import React, {useState, useEffect} from 'react';
import {frontendConfig} from "../config";
import CryptoJS from 'crypto-js';
import axios from 'axios';
import {toast} from "react-toastify";


export default function Login(props: any) {
    console.log(props)
    const [form, setForm] = useState({
        login: '',
        password: ''
    });

    const errorTimeout = 5;
    const [debouncedPassword, setDebouncedPassword] = useState('');

    // handle change password to md5 debounce it because of cost operation
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            password: e.target.value
        });

        // crypto js md5 hash password
        setDebouncedPassword(CryptoJS.MD5(e.target.value).toString());
    };

    const handlechangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            login: e.target.value
        });
    }

    const validateForm = () => {
            let isValid = true;

        if (form.login.length === 0) {
            isValid = false;
            document.getElementById('login-error').innerText = 'Le login ne peut pas être vide';
        } else {
            document.getElementById('login-error')!.innerText = '';
        }

        if (form.password.length === 0) {
            isValid = false;
            document.getElementById('password-error')!.innerText = 'Le mot de passe ne peut pas être vide';
        } else {
            document.getElementById('password-error')!.innerText = '';
        }

        setTimeout(() => {
            document.getElementById('login-error')!.innerText = '';
            document.getElementById('password-error')!.innerText = '';
        }, errorTimeout  * 1000);

        return isValid;
    }

    const startConnexion = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('/members/auth', {
                login: form.login,
                password: debouncedPassword
            });

            if (response.status === 200) {
                toast.success('Vous êtes connecté: ' + response.data.user.login);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                window.location.href = '/';
            }
        } catch (e) {
            console.log(debouncedPassword, form.password);
            toast.error(e.response.data.errors[0].text);
        }

    }

    return (
        <div>
            <h1 className={'mt-10 text-center text-2xl font-bold text-gray-600'}>Bienvenue sur la page de connexion</h1>
                <form action="#" onSubmit={startConnexion} className={'mx-5'}>
                    <div>
                        <label htmlFor="login">Login: Email ou username</label>
                        <input placeholder={"Veuillez renseigner votre email ou votre nom d'utilisateur"} type="login" name="login" id="login" autoComplete={"username"} value={form.login} onChange={handlechangeLogin} className={"p-2 border border-gray-300 rounded w-full"} />
                        <p id={"login-error"} className={"text-red-500 my-3"}></p>
                    </div>
                    <div>
                        <label htmlFor="password">Mot de passe</label>
                        <input placeholder={"Veuillez renseigner votre mot de passe"} type="password" autoComplete={"current-password"} onChange={handleChangePassword} value={form.password} name="password" id="password" className={"p-2 border border-gray-300 rounded w-full"} />
                        <p id={"password-error"} className={"text-red-500 my-3"}></p>
                    </div>
                    <div>
                        <button type="submit" className={"p-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-5"}>
                            Se connecter
                        </button>
                    </div>
                </form>
        </div>
    )
}