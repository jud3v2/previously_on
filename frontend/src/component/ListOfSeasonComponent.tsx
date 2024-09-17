import EpisodeCard from "./EpisodeCard.tsx";
import React from "react";

export default function ListOfSeasonComponent(props: any) {
    const {currentSeason, filteredEpisodes} = props;
    return (
        <>
            <h2 className={"text-xl font-bold m-3"}>Liste des épisodes de la saison {currentSeason}</h2>
            <div>
                <button className={"bg-blue-500 text-white p-2 rounded m-3"} onClick={() => props.setFilterEpisodeSeen(!props.filterEpisodeSeen)}>Afficher les épisodes {props.filterEpisodeSeen ? 'déjà visionné' : 'non visionné et visionné'}</button>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3"}>
                {filteredEpisodes?.length > 0 ? filteredEpisodes?.map((episode: any) => {
                    return <EpisodeCard episode={episode} key={episode.id} filteredEpisodes={props.filteredEpisodes} setFilteredepisodes={props.setFilteredEpisodes} filterEpisodeSeen={props.filterEpisodeSeen} />
                }) : <p>Aucun épisode {props.filterEpisodeSeen ? 'déjà visionné' : 'non visionné et visionné'} pour cette saison</p>}
            </div>
        </>
    )
}