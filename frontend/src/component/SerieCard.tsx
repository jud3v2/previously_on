import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export default function SerieCard(props: any) {
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    const addSeriesToAccount = async (e: React.SyntheticEvent, id: number) => {
        e.preventDefault();
        setButtonLoading(true);
        try {
            const response = await axios.post(`/shows/show?id=${id}`);
            toast.success('Série ajoutée à votre compte')
            props.setMemberSeries([...props.memberSeries, response.data.show])
        } catch (error) {
            toast.error(error.response.data.errors[0].text)
            console.error(error)
        } finally {
            setButtonLoading(false);
        }
    }

    const deleteSeriesFromAccount = async (e: React.SyntheticEvent, id: number) => {
        e.preventDefault();
        setButtonLoading(true);
        try {
            await axios.delete(`/shows/show?id=${id}`);
            toast.success('Série supprimée de votre compte')
            props.setMemberSeries(props.memberSeries.filter((serie: any) => serie.id !== id))
        } catch (error) {
            toast.error(error.response.data.errors[0].text)
            console.error(error)
        } finally {
            setButtonLoading(false)
        }
    }

    return (
        <div key={props.serie.id}>
            <div className='relative bg-black'>
                <Link to={`/series/${props.serie.id}`}>
                    <img src={props.serie.images.poster} alt={props.serie.title}
                        className={'w-full h-96 rounded object-fit cursor-pointer hover:opacity-50'}/>
                </Link>
                <div className={"rounded-lg z-10"}>
                    <div className='absolute top-2 left-2 z-10 border border-2 border-white px-1 rounded-full'>
                        <h2 className={"text-sm text-white font-bold text-white"}>{props.serie.creation}</h2>
                    </div>
                    <div className='absolute top-2 right-2 z-10 border border-2 border-white px-1 rounded-full'>
                        <h2 className={"text-sm text-white font-bold text-white "}>{props.serie.episodes} épisodes</h2>
                    </div>
                </div>
            </div>
            <div className="mt-1">
                {props.memberSeries?.find((s: any) => s.id === props.serie.id) ? (
                    <button onClick={e => deleteSeriesFromAccount(e, props.serie.id)}
                            className={'p-1 rounded text-sm text-center w-full bg-red-500 font-bold text-white hover:bg-red-700'}>
                        {buttonLoading ? 'Chargement...' : 'Supprimer de ma liste'}
                    </button>
                ) : (
                    <button onClick={e => addSeriesToAccount(e, props.serie.id)}
                            className={'p-1 rounded text-sm text-center w-full bg-blue-500 font-bold text-white hover:bg-blue-700'}>
                        {buttonLoading ? 'Chargement...' : 'Ajouter à ma liste'}
                    </button>
                )}
            </div>
        </div>
    )
}