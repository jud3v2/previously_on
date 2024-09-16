import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Serie(props: any) {
    const {id} = useParams();
    const [serie, setSerie] = useState({});
    const [episodes, setEpisodes] = useState([]);

    const fetchSerie = async () => {
        try {
            const response = await axios.get(`/shows/display?id=${id}&summary=true&includes=seasons,episodes,summaries,summary,actors,alternatives,images,videos`);
            setSerie(response.data.show)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchEpisodes = async () => {
        try {
            const response = await axios.get(`/episodes/list?id=${id}`);
            setEpisodes(response.data.shows)
        } catch (error) {
            console.error(error)
        }
    }


    const addSeriesToAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/shows/show?id=${id}`);
            toast.success('Série ajoutée à votre compte')
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const archiveSerie = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/shows/archive?id=${id}`);
            toast.success('Série archivée')
            console.log(response)
        } catch (error) {
            await addSeriesToAccount(e);
            await archiveSerie(e);
        }
    }

    useEffect(() => {
        toast.promise(fetchSerie, {
            pending: 'Chargement de la série...',
            success: 'Série chargée',
            error: 'Erreur lors du chargement de la série'
        }).then(r => r)

        toast.promise(fetchEpisodes, {
            pending: 'Chargement des épisodes...',
            success: 'Épisodes chargés',
            error: 'Erreur lors du chargement des épisodes'
        }).then(r => r)
    }, [id])

    const genres = serie.genres ?  Object.keys(serie?.genres)?.map(key => serie?.genres[key]) : null;

    return (
        <div>
            <Link to={'/series'} className={"underline m-3"}>Retour en arrière</Link>
            <div className={'m-3'}>
                <h1 className={"text-2xl font-bold"}>{serie?.title}</h1>
            </div>
            <div className={"flex"}>
                <div className={'m-3'}>
                    <img src={serie?.images?.poster} alt={serie?.title} className={"w-48 h-64 object-fit"} />
                    <button className={'p-1 text-sm bg-blue-500 text-white hover:bg-blue-700 mt-1 rounded w-full'} onClick={archiveSerie}>
                        Archiver la série
                    </button>
                </div>
                <div className={'m-3'}>
                    <h2 className={"text-xl font-bold"}>Description</h2>
                    <p>{serie?.description}</p>
                    <h2 className={"text-xl font-bold"}>Nombre de saison:</h2>
                    <p>{serie?.seasons} saison(s) pour un nombre d'épisode totale: {serie?.episodes}</p>
                    <h2 className={"text-xl font-bold"}>Longueur moyenne des épisodes:</h2>
                    <p>{serie?.length} minutes</p>
                    <h2 className={"text-xl font-bold"}>Note du publique:</h2>
                    <p>{serie?.notes?.mean.toFixed(2)}/5 sur un total de {serie?.notes?.total} avis</p>
                    <h2 className={"text-xl font-bold"}>Liste des genres:</h2>
                    <ul>
                        {genres?.map((genre: any) => {
                            return (
                                <li key={genre}>{genre}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}