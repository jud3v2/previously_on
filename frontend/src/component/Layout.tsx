import React, {useState} from 'react';
// Build the page with props and layout props can be null or undefined
export default function Layout(Component: (props?: any) => JSX.Element, props?: any): JSX.Element {

    if(props === undefined) {
        props = {}
    }

    if(props.title === undefined) {
        props.title = "PreviouslyOn"
    }

    if(props.protected === undefined) {
        props.protected = false
    }

    props.user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!) : undefined

    if(props.protected && props.user === undefined) {
        window.location.href = "/login"
    }

    return (
        <div>
            <header className={"h-24 bg-black text-white flex items-center"}>
                <h1 className={"text-2xl"}>PreviouslyOn</h1>
            </header>
            <main className={'mb-auto h-screen'}>
                <Component {...props} user={props.user} />
            </main>
            <footer className={'h-24 bg-gray-200 text-gray-700'}>
                <p>Footer</p>
            </footer>
        </div>
    )
}