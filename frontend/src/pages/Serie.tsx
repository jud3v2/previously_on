import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {Link} from "react-router-dom";
import SeasonComponent from "../component/SeasonComponent.tsx";
import ListOfSeasonComponent from "../component/ListOfSeasonComponent.tsx";
import {useQuery} from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import {Box} from "@mui/material";

export default function Serie(props: any) {
    const {id} = useParams();
    const [serie, setSerie] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(1);
    const [filteredEpisodes, setFilteredEpisodes] = useState([]);
    const [filterEpisodeSeen, setFilterEpisodeSeen] = useState(true);
    const [loading, setLoading] = useState(true);

    const fetchSerie = async () => {
        try {
            const response = await axios.get(`/shows/display?id=${id}&summary=true&includes=seasons,episodes,summaries,summary,actors,alternatives,images,videos`);
            setSerie(response.data.show)
            return response.data;
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
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
            const {data} = await axios.post(`/shows/archive?id=${id}`);
            setSerie(data.show);
            toast.success('Série archivée')
        } catch (error) {
            await addSeriesToAccount(e);
            await archiveSerie(e);
        }
    }
    const unarchiveSerie = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.delete(`/shows/archive?id=${id}`);
            setSerie(data.show);
            toast.success('Série désarchivée')
        } catch (error) {
            toast.error('Erreur lors de l\'archivage de la série ' + error.response.data.errors[0].text)
        }
    }

    const {data: seriesEpisodesWithSeason, isLoading: seriesEpisodesWithSeasonIsLoading} = useQuery({
        queryKey: ['seriesEpisodesWithSeason', id],
        queryFn: fetchSeriesEpisodesWithSeason
    });

    const {data: memberEpisodes, isLoading: memberEpisodesIsLoading} = useQuery({
        queryKey: ['memberEpisodes', id],
        queryFn: fetchMemberEpisodes
    });

    const {data: serieData, isLoading: serieIsLoading} = useQuery({
        queryKey: ['serie', id],
        queryFn: fetchSerie
    });

    useEffect(() => {
        if (serieData) {
            setSerie(serieData.show);
        }

        if (seriesEpisodesWithSeason) {
            setEpisodes(episodes.data.episodes.filter((episode: any) => episode.season === currentSeason));
        }

        if (memberEpisodes) {
            setEpisodes(memberEpisodes.shows);
        }
    }, []);

    useEffect(() => {
        if (currentSeason) {
            // if the series have more than one season, we filter the episodes to show only the episodes of the current season
            setFilteredEpisodes(episodes.filter((episode: any) => episode.season === currentSeason))
        } else {
            // if the series have only one season, we show all the episodes
            setFilteredEpisodes(episodes)
        }
    }, [currentSeason])

    const genres = serie.genres ? Object.keys(serie?.genres)?.map(key => serie?.genres[key]) : null;
    const loadingLimit = 1;


    return (
        <div>
            {/* Back Link */}
            <Link to={'/series'} className="underline m-3">
                Retour en arrière
            </Link>

            {/* Title */}
            <div className="m-3">
                {loading ? (
                    <Skeleton variant="text" width={200} height={40}/>
                ) : (
                    <h1 className="text-2xl font-bold">{serie?.title}</h1>
                )}
            </div>

            {/* Main Content */}
            <div className="flex">
                {/* Skeletons or Real Content */}
                {serieIsLoading || seriesEpisodesWithSeasonIsLoading || memberEpisodesIsLoading
                    ? Array(loadingLimit)
                        .fill(0)
                        .map((_, i) => (
                            <div className={"w-full max-w-full flex"}>
                                <div
                                    key={i}
                                    style={{
                                        width: 200,
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                    }}
                                    className={"ml-3 mb-1"}
                                >
                                    {/* Image Skeleton */}
                                    <Skeleton width="100%" height={150} sx={{
                                        height: 150,
                                        marginTop: 0,
                                        paddingTop: 0,
                                    }}/>

                                </div>
                                <div className={"w-full"}>
                                    {/* Description Skeleton */}
                                    <div className="m-3">
                                        <Skeleton height={40} width={"50%"}/>
                                        <Skeleton height={30} width={"80%"} count={10}/>
                                        <Skeleton height={30} width={"80%"} count={10}/>

                                        <Skeleton height={40} width={"50%"}/>
                                        <Skeleton height={20} width={"50%"} count={10}/>

                                        <Skeleton height={40} width={"50%"}/>
                                        <Skeleton height={20} width={"30%"} count={10}/>

                                        <Skeleton height={40} width={"50%"}/>
                                        <Skeleton height={20} width={"50%"} count={10}/>

                                        <Skeleton height={40} width={"50%"}/>
                                        <Skeleton height={20} width={"20%"} count={10}/>
                                        <Skeleton height={20} width={"20%"} count={10}/>
                                        <Skeleton height={20} width={"20%"} count={10}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    : (
                        <div className="flex">
                            {/* Image and Archive Button Section */}
                            <div className="m-3">
                                <img
                                    src={serie?.images?.poster}
                                    alt={serie?.title}
                                    className="w-auto h-auto max-h-72 object-fit"
                                />
                                {serie?.user?.archived ? (
                                    <button
                                        className="p-1 text-sm bg-red-500 text-white hover:bg-blue-700 mt-1 rounded w-full"
                                        onClick={unarchiveSerie}
                                    >
                                        Désarchiver la série
                                    </button>
                                ) : (
                                    <button
                                        className="p-1 text-sm bg-blue-500 text-white hover:bg-blue-700 mt-1 rounded w-full"
                                        onClick={archiveSerie}
                                    >
                                        Archiver la série
                                    </button>
                                )}
                            </div>

                            {/* Description and Details Section */}
                            <div className="m-3">
                                <h2 className="text-xl font-bold">Description</h2>
                                <p>{serie?.description}</p>

                                <h2 className="text-xl font-bold">Nombre de saison:</h2>
                                <p>
                                    {serie?.seasons} saison(s) pour un nombre d'épisode total: {serie?.episodes}
                                </p>

                                <h2 className="text-xl font-bold">Longueur moyenne des épisodes:</h2>
                                <p>{serie?.length} minutes</p>

                                <h2 className="text-xl font-bold">Note du publique:</h2>
                                <p>
                                    {serie?.notes?.mean.toFixed(2)}/5 sur un total de {serie?.notes?.total} avis
                                </p>

                                <h2 className="text-xl font-bold">Liste des genres:</h2>
                                <ul>
                                    {genres?.map((genre) => (
                                        <li key={genre}>{genre}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
            </div>

            {/* Season Components */}
            <div>
                {!loading && (
                    <>
                        <SeasonComponent
                            serie={serie}
                            setCurrentSeason={setCurrentSeason}
                            currentSeason={currentSeason}
                        />
                        <ListOfSeasonComponent
                            currentSeason={currentSeason}
                            filteredEpisodes={filteredEpisodes}
                            setFilteredEpisodes={setFilteredEpisodes}
                            filterEpisodeSeen={filterEpisodeSeen}
                            setFilterEpisodeSeen={setFilterEpisodeSeen}
                        />
                    </>
                )}
            </div>
        </div>
    )
}