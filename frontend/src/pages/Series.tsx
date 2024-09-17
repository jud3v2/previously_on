import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import SerieCard from "../component/SerieCard.tsx";

export default function Series(props: any) {
    const [series, setSeries] = useState<array>([]);
    const [memberSeries, setMemberSeries] = useState<array>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [filter, setFilter] = useState<object>({
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

    const fetchMemberSeries = async () => {
        try {
            const response = await axios.get(`/shows/member`);
            console.log(response.data)
            setMemberSeries(response.data.shows)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        return () => {
            toast.promise(fetchSeries, {
                pending: 'Chargement des séries...',
                success: 'Séries chargées',
                error: 'Erreur lors du chargement des séries'
            }).then(() => setLoading(false))

            toast.promise(fetchMemberSeries, {
                pending: 'Chargement de vos séries...',
                success: 'Vos séries sont chargées',
                error: 'Erreur lors du chargement de vos séries'
            }).then(() => setLoading(false))
        }
    }, [filter])

    return (
        <div className={'m-5'}>
            {/*Filtre*/}
            <div className={'container mx-auto h-24 bg-white shadow-xl mt-10 rounded py-2 mb-10'}>
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
            <h1 className='text-2xl ml-44'>Liste des séries populaire :</h1>
            {/*Affichage des séries*/}
            <div className={"flex mx-auto justify-center mt-10"}>
                <div className={"grid grid-cols-5 gap-3"}>
                    {series?.map((serie: any) => {
                        return <SerieCard key={serie.id} serie={serie} memberSeries={memberSeries} setMemberSeries={setMemberSeries} />
                    })}
                    {loading && (
                        <div className={'text-center'}>
                            <p>Chargement des séries...</p>
                        </div>)}
                </div>
            </div>

            {/*Fin affichage des séries*/}
        </div>
    )
}