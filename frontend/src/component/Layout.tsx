import React from 'react';
import {checkUser, isConnected, protectedPage, logout, setUser} from "../helpers/functions.ts";
import {Link} from "react-router-dom";
// Build the page with props and layout props can be null or undefined
export default function Layout(Component: (props?: any) => JSX.Element, props?: any): JSX.Element {

    if(props === undefined) {
        props = {}
    }

    if(props.title === undefined) {
        props.title = "Previously On"
    }

    if(props.protected === undefined) {
        props.protected = false
    }

    props.user = checkUser()

    if(props.protected) {
        protectedPage();
    }

    return (
        <div>
            <header className={"h-24 bg-black text-white flex items-center justify-around"}>
                <h1 className={"text-2xl"}>{props.title}</h1>
                {props.user ? (
                    <p>{props.user.login}</p>
                ) : (
                    <Link to={'/login'}>Connexion</Link>
                )}
            </header>
            <main className={``}>
                <Component {...props} user={props.user} isConnected={isConnected} setUser={setUser} />
            </main>
            <footer className={'h-24 bg-gray-200 text-gray-700'}>
                <p>Footer</p>
            </footer>
        </div>
    )
}