import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {Link} from "react-router-dom";
import SeasonComponent from "../component/SeasonComponent.tsx";
import ListOfSeasonComponent from "../component/ListOfSeasonComponent.tsx";
import {useQuery} from "@tanstack/react-query";

export default function Serie(props: any) {
    const {id} = useParams();
    const [serie, setSerie] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(1);
    const [filteredEpisodes, setFilteredEpisodes] = useState([]);
    const [filterEpisodeSeen, setFilterEpisodeSeen] = useState(true);

    const fetchSerie = async () => {
        try {
            const response = await axios.get(`/shows/display?id=${id}&summary=true&includes=seasons,episodes,summaries,summary,actors,alternatives,images,videos`);
            setSerie(response.data.show)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }

    const fetchSeriesEpisodesWithSeason = async () => {
         const episodes = await axios.get('/shows/episodes?id=' + id);
         setEpisodes(episodes.data.episodes);
         setFilteredEpisodes(episodes.data.episodes.filter((episode: any) => episode.season === currentSeason));
         return episodes.data;
    }

    const fetchMemberEpisodes = async () => {
        try {
            const response = await axios.get(`/episodes/list?id=${id}`);
            setEpisodes(response.data.shows)
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }


    const addSeriesToAccount = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/shows/show?id=${id}`);
            toast.success('Série ajoutée à votre compte')
        } catch (error) {
            console.error(error)
        }
    }

    const archiveSerie = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/shows/archive?id=${id}`);
            toast.success('Série archivée')
        } catch (error) {
            await addSeriesToAccount(e);
            await archiveSerie(e);
        }
    }

    const { data: seriesEpisodesWithSeason, isLoading: seriesEpisodesWithSeasonIsLoading } = useQuery({
        queryKey: ['seriesEpisodesWithSeason', id],
        queryFn: fetchSeriesEpisodesWithSeason
    });

    const { data: memberEpisodes, isLoading: memberEpisodesIsLoading } = useQuery({
        queryKey: ['memberEpisodes', id],
        queryFn: fetchMemberEpisodes
    });

    const { data: serieData, isLoading: serieIsLoading } = useQuery({
        queryKey: ['serie', id],
        queryFn: fetchSerie
    });

    useEffect(() => {
        if(serieData) {
            setSerie(serieData.show);
        }

        if(seriesEpisodesWithSeason) {
            setEpisodes(episodes.data.episodes.filter((episode: any) => episode.season === currentSeason));
        }

        if(memberEpisodes) {
            setEpisodes(memberEpisodes.shows);
        }
    }, []);

    useEffect(() => {
        if(currentSeason) {
            // if the series have more than one season, we filter the episodes to show only the episodes of the current season
            setFilteredEpisodes(episodes.filter((episode: any) => episode.season === currentSeason))
        } else {
            // if the series have only one season, we show all the episodes
            setFilteredEpisodes(episodes)
        }
    }, [currentSeason])

    const genres = serie.genres ?  Object.keys(serie?.genres)?.map(key => serie?.genres[key]) : null;

    if(serieIsLoading || seriesEpisodesWithSeasonIsLoading || memberEpisodesIsLoading) {
        return <div>Chargement des informations de la série...</div>
    }

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
            <div>
                <SeasonComponent serie={serie} setCurrentSeason={setCurrentSeason} currentSeason={currentSeason} />
                <ListOfSeasonComponent currentSeason={currentSeason} filteredEpisodes={filteredEpisodes} setFilteredEpisodes={setFilteredEpisodes} filterEpisodeSeen={filterEpisodeSeen} setFilterEpisodeSeen={setFilterEpisodeSeen} />
            </div>
        </div>
    )
}