import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';
export default function EpisodeCard(props: any) {
    // TODO ajouter la note de l'épisode dans la card de l'episode
    const episode = props.episode;
    const navigate = useNavigate();

    const markEpisodeAsSeen = async (e: React.SyntheticEvent, flag :boolean = false) => {
        e.preventDefault();
        const response = await axios.post('/episodes/watched', {id: episode.id, bulk: flag});

        if(flag) {
            props.setFilteredepisodes(props.filteredEpisodes.map((ep: any) => {
                if(ep.episode <= episode.episode) {
                    ep.user.seen = true;
                }
                return ep;
            }));
        } else {
            props.setFilteredepisodes(props.filteredEpisodes.map((episode: any) => {
                if (episode.id === response.data.episode.id) {
                    return response.data.episode;
                }
                return episode;
            }));
        }
    }

    return props.filterEpisodeSeen && episode.user.seen ? null : (
        <div key={episode.id} className={"border p-3 flex flex-col justify-between h-full"}>
            <div>
                <h3 className={"text-lg font-bold"}>Saison {episode.season} - Épisode {episode.episode}</h3>
                <p className={'font-bold'}>{episode.title}</p>
                <p className={'mb-auto'}>{episode.description}</p>
            </div>
            <div className={'flex justify-between gap-5 mt-3'}>
                <Link to={`/episode/${episode.id}`}>
                    <button onClick={() => {
                        navigate(`/episode/${episode.id}`)
                    }} className={'p-1 text-sm rounded bg-blue-500 text-white'}>Voir les détails de l'épisode</button>
                </Link>
                {episode.user.seen
                    ? <p className={'text-green-500'}>Déjà vu</p>
                    : <button className={'p-1 text-sm rounded bg-green-400 text-white'} onClick={event => {
                        // check previous episode to see if it's seen if not send confirmation to client if they want to mark all as seen until this episode
                        if (props.filteredEpisodes.find((e: any) => e.season === episode.season && e.episode === episode.episode - 1)?.user.seen) {
                            toast.promise(markEpisodeAsSeen(event, false), {
                                pending: 'Marquage de l\'épisode comme vu...',
                                success: 'Épisode marqué comme vu',
                                error: 'Erreur lors du marquage de l\'épisode comme vu'
                            }).then(r => r)
                        } else {
                            if (window.confirm(`Vous n'avez pas vu l'épisode précédent, voulez-vous marquer tous les épisodes de la saison comme vu jusqu'à cet épisode ? (En appuyant sur OK, tous les épisodes de la saison seront marqués comme vu jusqu'à l'épisode ${episode.episode}, à l'inverse uniquement l'épisode actuel sera marqué comme vu)`)) {
                                toast.promise(markEpisodeAsSeen(event, true), {
                                    pending: 'Marquage de l\'épisode comme vu...',
                                    success: 'Épisode marqué comme vu',
                                    error: 'Erreur lors du marquage de l\'épisode comme vu'
                                }).then(r => r)
                            }
                        }
                    }}>Marquer comme vu</button>}
            </div>
        </div>

    );
}