import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { frontendConfig } from '../config';
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

function AddFriendModal({ isOpen, onClose }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [userSearchResult, setUserSearchResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        axios.get(`https://api.betaseries.com/members/search?login=${searchQuery}`)
            .then(response => {
                if (response.data.users && response.data.users.length > 0) {
                    setUserSearchResult(response.data.users[0]);
                } else {
                    setUserSearchResult(null);
                    toast.error("Utilisateur non trouvé.");
                }
            })
            .catch(error => {
                console.error(error);
                toast.error("Erreur lors de la recherche.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleAddFriend = (friendId: number) => {
        if(userSearchResult.id === JSON.parse(localStorage.getItem('user') || '{}').id) {
            toast.error("Vous ne pouvez pas vous ajouter vous-même en ami.");
            return;
        }

        axios.post('https://api.betaseries.com/friends/friend', { id: friendId })
            .then(response => {
                toast.success('Ami ajouté avec succès');
                onClose();
            })
            .catch(error => {
                console.error(error);
                toast.error("Erreur lors de l'ajout de l'ami.");
            });
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className='relative flex items-start justify-between'>
                    <button
                        className='absolute right-0'
                        onClick={onClose}
                    >
                        <IoMdCloseCircle />
                    </button>
                </div>
                <div className='flex flex-row justify-between'>
                    <h2 className="text-xl font-bold mb-4">Ajouter un ami</h2>
                </div>
                <input
                    type="text"
                    className="border p-2 rounded-lg w-full"
                    placeholder="Rechercher par login"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white mt-4 p-2 rounded-lg w-full"
                    onClick={handleSearch}
                    disabled={loading}
                >
                    {loading ? "Recherche en cours..." : "Rechercher"}
                </button>

                {userSearchResult && (
                    <div className="mt-4">
                        <div className='flex flex-row items-center justify-between'>
                            <img src={`${frontendConfig.betaSeriesApiUrl}/pictures/members?id=${userSearchResult.id}&key=${frontendConfig.betaSeriesApiKey}`} alt={`Avatar de ${userSearchResult.login}`} className="w-12 h-auto rounded-full border border-1 border-black" />
                            <p className="font-semibold flex-1 ml-3">{userSearchResult.login}</p>
                            {userSearchResult.in_account != true ? (
                                <button
                                    className="bg-green-500 text-white mt-2 p-2 rounded-lg"
                                    onClick={() => handleAddFriend(userSearchResult.id)}
                                >
                                    <IoPersonAddSharp />
                                </button>
                            ): null}

                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : null;
}

export default AddFriendModal;
