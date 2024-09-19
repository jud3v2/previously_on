import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { fetchUserData } from "../helpers/functions.ts";
import StatistiqueCard from "../component/StatistiqueCard.tsx";
import FriendsList from "../component/FriendsList.tsx";

export default function Profile(props: any) {
    const { user } = props;
    const [formDataState, setFormDataState] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [avatarUser, setAvatarUser] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [friends, setFriends] = useState<any[]>([]);

    const handleAvatarChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('avatar', file);
            setFormDataState(formData);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLoading(true);
        axios.post('https://api.betaseries.com/members/avatar', formDataState, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response);
            props.setUser(JSON.stringify(response.data.member));
            fetchUserData().then(r => localStorage.setItem('user', JSON.stringify(r)));
            const newAvatarUrl = URL.createObjectURL(formDataState.get('avatar'));
            setAvatarUser(newAvatarUrl);
            toast.success('Avatar mis à jour');
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
    };

    const handleAvatarUser = () => {
        axios.get('https://api.betaseries.com/pictures/members?id=' + props.user.id, { responseType: 'arraybuffer' })
        .then(response => {
            console.log(response);
            const blob = new Blob([response.data], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            setAvatarUser(url);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const fetchFriends = () => {
        axios.get('https://api.betaseries.com/friends/list?id=' + props.user.id)
        .then(response => {
            setFriends(response.data.users);
        })
        .catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        handleAvatarUser();
        fetchFriends();
    }, [props.user.id]);

    return (
        <div className='container mx-auto mt-10'>
            <h1 className={'text-2xl'}>Mon profil :</h1>
            <div className={'flex flex-col'}>
                <div className={'flex mt-5'}>
                    <div className='flex flex-col'>
                        <img
                            src={loading || !user.avatar ? '/pictures/default-pic.jpg' : avatarUser}
                            alt={'Photo de ' + user.login}
                            className={'w-40 h-40 rounded-full border border-1 border-black cursor-pointer hover:ring-2 hover:ring-blue-500'}
                            onClick={() => fileInputRef.current?.click()}
                        />
                        <button className='bg-transparent border border-1 border-black text-black hover:bg-black hover:text-white duration-300 ease-in rounded-full p-2 mt-5' onClick={handleClick}>Update Avatar</button>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex flex-col'>
                            <h1 className={'text-2xl font-bold ml-5 mb-2'}>{user.login}</h1>
                            <div className='mt-3 ml-5'>
                                <StatistiqueCard user={user} />
                            </div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        />
                        <div className="ml-5 mt-5">
                            <FriendsList friends={friends} />
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col mt-5'}>
                    <div className='flex mx-44'>
                    </div>
                </div>
            </div>
        </div>
    );
}
