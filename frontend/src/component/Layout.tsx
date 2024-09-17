import React from 'react';
import {checkUser, isConnected, protectedPage, logout, setUser} from "../helpers/functions.ts";
import {Link} from "react-router-dom";
import logo from '../../public/pictures/logo-previously-black.png'
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

    if(props.protected && window.location.pathname !== '/login') {
        protectedPage();
    }

    return (
        <div>
            <header className={"h-24 bg-white text-black flex justify-between items-center border border-b-2 border-black shadow-md"}>
                <div className={'flex items-center ml-40 space-x-10'}>
                    <img src={logo} alt={'Logo'} className={'h-auto w-32'} />
                    <h1 className={"text-2xl"}>{props.title}</h1>
                </div>
                <div className='mr-40'>
                    {props.user ? (
                        <p>{props.user.login}</p>
                    ) : (
                        <Link to={'/login'}>Connexion</Link>
                    )}
                </div>
            </header>
            <main className={``}>
                <Component {...props} user={props.user} isConnected={isConnected} setUser={setUser} />
            </main>
            <footer className={'flex h-24 bg-gray-200 text-gray-700 items-center '}>
                <p>Footer</p>
            </footer>
        </div>
    )
}