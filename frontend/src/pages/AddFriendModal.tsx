import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

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
                <h2 className="text-xl font-bold mb-4">Ajouter un ami</h2>
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
                        <p className="font-semibold">{userSearchResult.login}</p>
                        <button
                            className="bg-green-500 text-white mt-2 p-2 rounded-lg w-full"
                            onClick={() => handleAddFriend(userSearchResult.id)}
                        >
                            Ajouter {userSearchResult.login} comme ami
                        </button>
                    </div>
                )}

                <button
                    className="bg-red-500 text-white mt-4 p-2 rounded-lg w-full"
                    onClick={onClose}
                >
                    Fermer
                </button>
            </div>
        </div>
    ) : null;
}

export default AddFriendModal;
