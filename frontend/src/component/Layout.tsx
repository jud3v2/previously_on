import React, { useState } from 'react';
import { checkUser, isConnected, protectedPage, logout, setUser } from "../helpers/functions.ts";
import { Link } from "react-router-dom";
import logo from '/pictures/logo-previously-black.png';

// Build the page with props and layout props can be null or undefined
export default function Layout({ Component, props }: { Component: (props?: any) => JSX.Element; props?: any }): JSX.Element {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    if (props === undefined) {
        props = {};
    }

    if (props.title === undefined) {
        props.title = "Previously On";
    }

    if (props.protected === undefined) {
        props.protected = false;
    }

    props.user = checkUser();

    if (props.protected && window.location.pathname !== '/login') {
        protectedPage();
    }

    return (
        <div className='h-screen'>
            <header className={"h-24 bg-white text-black flex justify-between items-center border border-b-2 border-black shadow-md"}>
                <div className={'flex items-center ml-40 space-x-10'}>
                    <Link to={'/'}>
                        <img src={logo} alt={'Logo'} className={'h-auto w-32'} />
                    </Link>
                    <h1 className={"text-2xl"}>{props.title}</h1>
                </div>
                <div className='mr-40 relative'>
                    {props.user ? (
                        <div
                            onMouseEnter={() => {
                                console.log("Dropdown opened");
                                setDropdownOpen(true);
                            }}
                            onMouseLeave={() => {
                                console.log("Dropdown closed");
                                setDropdownOpen(false);
                            }}
                        >
                            <p className="cursor-pointer">
                                {props.user.login}
                                <span>▼</span>
                            </p>
                            {dropdownOpen && (
                                <div className="absolute bg-white shadow-md rounded">
                                    <Link to="/profile" className="block px-4 py-2 text-black hover:bg-gray-200">Profil</Link>
                                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">Déconnexion</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to={'/login'}>Connexion</Link>
                    )}
                </div>
            </header>
            <main>
                <Component {...props} user={props.user} isConnected={isConnected} setUser={setUser} />
            </main>
            <footer className={'flex h-16 bg-gray-200 text-gray-700 items-center sticky top-[100vh]'}>
                <p className='flex mx-auto text-center'>
                    Projet PreviouslyOn - Judikaël BELLANCE & Maxime CARON - Tout droit réservé @2024
                </p>
            </footer>
        </div>
    );
}