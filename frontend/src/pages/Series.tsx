import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SerieCard from "../component/SerieCard.tsx";
import {useQuery} from '@tanstack/react-query';
import {PAYS as countries} from "../data/countries.ts";
import Skeleton from '@mui/material/Skeleton';
import {Box} from "@mui/material";

export default function Series(props: any) {
    const [series, setSeries] = useState<array>([]);
    const [memberSeries, setMemberSeries] = useState<array>([]);
    const [filter, setFilter] = useState<object>({
        start: 0,
        limit: 100,
        order: 'popularity',
        filter: 'all',
        platform: 'all',
        country: 'france',
        locale: 'FR',
    });

    const fetchSeries = async () => {
        try {
            const response = await axios.get(`/shows/list?start=${filter.start}&limit=${filter.limit}&order=${filter.order}&filter=${filter.filter}&platform=${filter.platform}&country=${filter.country}&locale=${filter.locale.toLowerCase()}`);
            setSeries(response.data.shows)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const fetchMemberSeries = async () => {
        try {
            const response = await axios.get(`/shows/member`);
            setMemberSeries(response.data.shows)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const fetchPlatforms = async () => {
        try {
            const response = await axios.get(`/platforms/list`);
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const {data: seriesData, isLoading: seriesIsLoading} = useQuery({
        queryKey: ['series', filter],
        queryFn: fetchSeries,
        staleTime: 1000 * 60 * 60 // 1 hour
    });

    const {data: memberSeriesData, isLoading: memberSeriesIsLoading} = useQuery({
        queryKey: ['memberSeries', props.user.id],
        queryFn: fetchMemberSeries
    });

    // fetch platforms details
    const {data: platformsData, isLoading: platformsIsLoading} = useQuery({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms
    })

    const handlerFilterChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setFilter({...filter, [target.name]: target.value.toLowerCase()});
    }

    useEffect(() => {
        if(seriesData) {
            setSeries(seriesData.shows)
        }

        if(memberSeriesData) {
            setMemberSeries(memberSeriesData.shows)
        }
    }, []);

    const loadingLimit = filter.limit;
    const loading = seriesIsLoading || memberSeriesIsLoading || platformsIsLoading;

    return (
        <div className={'m-5'}>
            {/*Filtre*/}
            <div className={'container mx-auto h-24 bg-white shadow-xl mt-10 rounded py-2 mb-10'}>
                <div className={"m-2 grid grid-cols-6 gap-5"}>
                    <div>
                        <label htmlFor="platform">Plateforme de diffusion</label>
                        <select name="platform" id="platform" value={filter.platform} onChange={handlerFilterChange} className={'w-full border p-1 rounded-lg text-sm'}>
                            <option value="all">Toutes les plateformes</option>
                            <option value="none" disabled={true}>SVOD:</option>
                            {platformsData?.platforms?.svod?.map((platform: any) => <option key={platform.id} value={platform.id}>{platform.name}</option>)}
                            <option value="none" disabled={true}>VOD:</option>
                            {platformsData?.platforms?.vod?.map((platform: any) => <option key={platform.id} value={platform.id}>{platform.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="country">Pays de diffusion</label>
                        <select name="country" id="country" value={filter.country.toLowerCase()} onChange={handlerFilterChange} className={"w-full border p-1 rounded-lg text-sm"}>
                            <option value="all">Tous les pays de diffusion</option>
                            {countries.map((country: any) => <option key={country.alpha2Code} value={country.name.toLowerCase()}>{country.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="language">Préférence de langue</label>
                        <select name="language" id="language" value={filter.locale.toLowerCase()} onChange={handlerFilterChange} className={"w-full border p-1 rounded-lg text-sm"}>
                            <option value="all">Toute les langues</option>
                            {countries.map((country: any) => <option key={country.alpha2Code} value={country.alpha2Code.toLowerCase()}>{country.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="order">Ordre</label>
                        <select name="order" id="order" value={filter.order} onChange={handlerFilterChange} className={"w-full border p-1 rounded-lg text-sm"}>
                            <option value="popularity">Ordre par popularité</option>
                            <option value="alphabetical">Ordre alphabétique</option>
                            <option value="followers">Ordre par nombre de followers</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="start">Début</label>
                        <select name="start" id="start" value={filter.start} onChange={handlerFilterChange} className={"w-full border p-1 rounded-lg text-sm"}>
                            <option value="0">0</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="limit">Limite</label>
                        <select name="limit" id="limit" value={filter.limit} onChange={handlerFilterChange} className={"w-full border p-1 rounded-lg text-sm"}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Fin des filtres*/}
            <div className={'container mx-auto'}>
                <h1 className='text-2xl'>Liste des séries populaire :</h1>
            </div>
            {/*Affichage des séries*/}
            <div className={"container flex mx-auto justify-center mt-10"}>
                <div className={"grid grid-cols-5 gap-3"}>
                    {loading ? Array(loadingLimit).fill(0).map((_, i) => (
                        <Box
                            sx={{
                                width: 200,
                                height: 400,
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                            }}
                            className="mx-auto"
                        >
                            {/* Image Skeleton */}
                            <Skeleton variant="rectangular" width="100%" height="100%" />

                            {/* Top-left badge Skeleton (Year) */}
                            <div className="absolute top-2 left-2 px-2 py-1 rounded-full">
                                <Skeleton width={40} height={20} />
                            </div>

                            {/* Top-right badge Skeleton (Episodes) */}
                            <div className="absolute top-2 right-2 px-2 py-1 rounded-full">
                                <Skeleton width={40} height={20} />
                            </div>

                            {/* Bottom Button Skeleton */}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                                <Skeleton width="75%" height={40} />
                            </div>
                        </Box>
                    )) : series.map((serie: any) => (
                        <SerieCard key={serie.id} serie={serie} memberSeries={memberSeries}
                                   setMemberSeries={setMemberSeries}/>
                    ))}
                </div>
            </div>

            {/*Fin affichage des séries*/}
        </div>
    )
}