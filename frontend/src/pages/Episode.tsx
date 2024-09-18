import React, { useEffect, useState } from 'react';
import {toast} from "react-toastify";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {frontendConfig} from "../config";
import dayjs from "dayjs";

export default function Episode(props: any) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const queryClient = useQueryClient();


    const {id} = useParams();
    const [episode, setEpisode] = useState<any>(null);

    const fetchEpisodeData = async () => {
         return await axios.get('/episodes/display?id=' + id)
    }

    const fetchComments = async () => {
        return await axios.get('/comments/comments?type=episode&locale=fr&id=' + id)
    }

    const sendComment = async () => {
        const data = {
            text: comment
        }

            const response = await axios.post(`/comments/comment?in_reply_to=&type=episode&id=${id}}`, data);
            if(response.status === 201 || response.status === 200) {
                toast.success('Commentaire ajouté avec succès');
            } else {
                toast.error('Erreur lors de l\'ajout du commentaire');
            }
            setComment('');

            return response;
    }

    const {data: episodeData, isLoading: episodeIsLoading} = useQuery({
        queryKey: ['episode', id],
        queryFn: fetchEpisodeData,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const {data: commentsData, isLoading: commentsIsLoading} = useQuery({
        queryKey: ['comments', id],
        queryFn: fetchComments,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const sendCommentMutation = useMutation({
        mutationFn: sendComment,
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['comments', id]});
            setComments([...comments, data.data.comment]);
        },
        onMutate: () => {

        },
        onError: (error) => {

        }
    });

    useEffect(() => {
        if(episodeData) {;
            setEpisode(episodeData.data.episode);
        }

        if(commentsData) {
            setComments(commentsData.data.comments);
        }
    }, [episodeData]);

    if(episodeIsLoading) {
        return <p>Chargement des détails de votre épisode.</p>
    }

    const imgURL = id => {
        return `${frontendConfig.betaSeriesApiUrl}/pictures/episodes?id=${id}&key=${frontendConfig.betaSeriesApiKey}`
    }

    const beautifulHumanReadableDate = (date: string) => {
        return dayjs(date).format('dddd D MMMM YYYY');
    }

    return (
        <div className={"w-full container mx-auto"}>
            <Link to={`/series/${episode?.show?.id}`} className={"my-1 text-gray-700 underline"}>Retour vers la série: {episode?.show?.title}</Link>
            <h1 className={"text-3xl font-bold text-gray-500"}>{episode?.title}</h1>
            <div>
                <img className={"object-fit"} src={imgURL(id)} alt={"Image de l'épisode: " + episode?.title}/>
            </div>
            <p className={'text-gray-500 font-bold'}>Numéro de l'épisode: {episode?.code}</p>
            <p className={'text-gray-500 font-bold my-1'}>Date de parution: {beautifulHumanReadableDate(episode?.date)}</p>
            <p className={'text-gray-500 font-bold my-1'}>Note: {parseFloat(episode?.note?.mean).toFixed(2)} / 5 pour un total de {episode?.note?.total} avis</p>
            <h2 className={"text-gray-500 font-bold text-2xl my-3"}>Résumé de l'épisode</h2>
            <p className={"text-gray-700"}>{episode?.description}</p>
            <h2 className={"text-gray-500 font-bold text-2xl my-3"}>Commentaires {comments?.length}</h2>
            {/*Affichage des commentaires avec l'affichage du login et de l'avatar de l'utilisateur*/}
            {commentsIsLoading ? <p>Chargement des commentaires</p> : null}
            {comments?.map((comment: any) => {
                return (
                    <div key={comment.id} className={"border p-2 my-2 rounded"}>
                        <div className={'flex items-center gap-5'}>
                            <img className={"w-10 h-10 rounded-full"} src={comment.avatar}
                                 alt={"Avatar de l'utilisateur: " + comment.login}/>
                            <p className={"text-gray-500 font-bold"}>{comment.login}</p>
                        </div>
                        <p className={"text-gray-700 mt-3"}>{comment.text}</p>
                    </div>
                )
            })}
            {/*Formulaire pour ajouter un commentaire*/}
            <form className={"mt-10 mb-3"} action="#" onSubmit={(e) => {e.preventDefault()}}>
                <h2 className={'text-gray-500 text-2xl font-semibold'}>Laisser un commentaire pour cette épisode</h2>
                <div className={"w-full"}>
                    <label htmlFor="comment" className={"mb-1 mt-3 text-gray-500"}>Veuillez laissé votre commentaire ici</label>
                    <textarea className={"w-full rounded border focus:border-green-500 p-1 text-gray-600"} name="comment" id="comment" value={comment} onChange={e => setComment(e.target.value)} cols={30} rows={10}></textarea>
                </div>
                <div>
                    <button type="submit" onClick={() => sendCommentMutation.mutate()} className={"bg-blue-500 rounded text-white p-1"}>Envoyer mon commentaire</button>
                </div>
            </form>
        </div>
    )
}