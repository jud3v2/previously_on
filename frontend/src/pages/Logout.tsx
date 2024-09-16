import React, {useEffect} from 'react';
import {logout} from "../helpers/functions.ts";
import {toast} from "react-toastify";

export default function Logout(props: any) {

    useEffect(() => {
        logout()
        toast.success('Vous êtes déconnecté')
    }, [])

    return (
        <div>
            <h1>Déconnexion en cours</h1>
        </div>
    )
}