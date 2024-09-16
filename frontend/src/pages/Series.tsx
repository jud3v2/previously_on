import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export default function Series(props: any) {
    const [series, setSeries] = useState([]);
    const [filter, setFilter] = useState({
        start: 0,
        limit: 100,
        order: 'popularity',
        filter: 'all',
        platform: 'all',
        country: 'all',
        locale: 'fr',
    });

    const fetchSeries = async () => {
        try {
            const response = await axios.get(`/shows/list?start=${filter.start}&limit=${filter.limit}&order=${filter.order}&filter=${filter.filter}&platform=${filter.platform}&country=${filter.country}&locale=${filter.locale}`);
            console.log(response.data)
            setSeries(response.data.shows)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        toast.promise(fetchSeries, {
            pending: 'Chargement des séries...',
            success: 'Séries chargées',
            error: 'Erreur lors du chargement des séries'
        }).then(r => r)
    }, [filter])

    return (
        <div className={'m-5'}>
            <h1>Liste des séries populaire</h1>
            {/*Filtre*/}
            <div className={'h-24 bg-gray-200 mt-3 rounded py-2'}>
                <div className={"m-2 flex justify-around"}>
                    <div>
                        Filtre
                    </div>
                    <div>
                        Plateforme
                    </div>
                    <div>
                        Pays
                    </div>
                    <div>
                        Langue
                    </div>
                    <div>
                        Ordre
                    </div>
                    <div>
                        Début
                    </div>
                    <div>
                        Limite
                    </div>
                </div>
            </div>
            {/* Fin des filtres*/}
            {/*Affichage des séries*/}

            <div className={"flex mx-auto justify-center mt-10"}>
                <div className={"grid grid-cols-3 gap-3"}>
                    {series?.map((serie: any) => {
                        return (
                            <div className={"ml-10"}>
                                <Link to={`/series/${serie.id}`}>
                                <img src={serie.images.poster} alt={serie.title} className={'w-full h-96 rounded object-fit cursor-pointer'}/>
                                </Link>
                                <h2 className={"text-xl font-bold text-gray-500 my-2"}>{serie.title}</h2>
                                <button onClick={() => {}} className={'p-1 rounded text-sm text-center w-full bg-blue-500 font-bold text-white hover:bg-blue-700'}>
                                    + Ajouter à ma liste
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/*Fin affichage des séries*/}
        </div>
    )
}