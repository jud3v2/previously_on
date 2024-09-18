import React, {useState, useEffect} from 'react';

export default function Profile(props: any) {
    const [user, setUser] = useState<any>({});

    useEffect(() => {
        setUser(props.user);
    }, [props.user]);

    console.log(user);

    return (
        <div className='container mx-auto mt-10'>
            <h1 className={'text-2xl'}>Mon profil :</h1>
            <div className={'flex flex-col'}>
                <div className={'flex flex-col mt-5'}>
                    {user.picture ? (
                        <img src={user.picture} alt={'Photo de ' + user.login} className={'w-40 h-40 rounded-full'} />
                    ) : (
                        <img src={'/pictures/default-pic.jpg'} alt={'Photo de ' + user.login} className={'w-40 h-40 rounded-full border border-1 border-black'} />
                    )}
                </div>
                <div className={'flex flex-col mt-5'}>
                    <h1 className={'text-xl'}>Nom d'utilisateur : {user.login}</h1>
                    <p className={'text-sm'}>{user.email}</p>
                </div>
            </div>
        </div>
    )
}
