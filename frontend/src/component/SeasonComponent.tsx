import React from "react";

export default function SeasonComponent(props: any) {
    return (
        <>
            <h2 className={"text-xl font-bold m-3"}>Les des saisons</h2>
            <div className={'w-full flex m-3'}>
                {props.serie?.seasons_details?.map((season: any) => {
                    return (
                        <div key={season.number} onClick={(e) => {
                            e.preventDefault()
                            props.setCurrentSeason(season.number)
                        }}
                             className={`border ${props.currentSeason === season.number ? 'bg-gray-400' : 'bg-gray-200'} rounded p-3 py-1 cursor-pointer mr-3`}>
                            <h3 className={"text-lg font-bold"}>{season.number}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}