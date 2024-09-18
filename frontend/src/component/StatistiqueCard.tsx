import React, { useEffect, useState } from "react";

export default function StatistiqueCard(props: any) {
    const { user } = props;
    const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    const initialCounts = {
      badges: randomNumber(0, 100),
      comments: randomNumber(0, 100),
      episodes: randomNumber(0, 100),
      episodes_per_month: randomNumber(0, 100),
      episodes_to_watch: randomNumber(0, 100),
      friends: randomNumber(0, 100),
      movies: randomNumber(0, 100),
      shows: randomNumber(0, 100),
      streak_days: randomNumber(0, 100),
      time_on_movies: randomNumber(0, 100),
      time_on_tv: randomNumber(0, 100),
  };

  const [counts, setCounts] = useState(initialCounts);

      useEffect(() => {
        const animationFrames = Object.keys(initialCounts).reduce((acc, key) => {
            const updateCount = () => {
                if (counts[key] > user.stats[key]) {
                    setCounts(prevCounts => ({ ...prevCounts, [key]: prevCounts[key] - 1 }));
                    acc[key] = requestAnimationFrame(updateCount);
                } else {
                    cancelAnimationFrame(acc[key]);
                }
            };
            acc[key] = requestAnimationFrame(updateCount);
            return acc;
        }, {} as { [key: string]: number });

        return () => Object.values(animationFrames).forEach(cancelAnimationFrame);
    }, [counts, user.stats]);

    return (
        <div className="border border-black rounded-lg shadow">
            <div className="p-4 bg-transparent rounded-lg md:p-8">
                <p className={'text-2xl ml-5 underline'}>Mes statistiques :</p>
                <dl className="grid grid-cols-6 gap-6 p-4 text-gray-900">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.badges}</dt>
                        <dd className="text-black">Badges</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.comments}</dt>
                        <dd className="text-black">Commentaires</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.episodes}</dt>
                        <dd className="text-black">Épisodes</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.episodes_per_month}</dt>
                        <dd className="text-black">Épisodes par mois</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.episodes_to_watch}</dt>
                        <dd className="text-black">Épisodes à regarder</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{user.stats.favorite_genre || "N/A"}</dt>
                        <dd className="text-black">Genre préféré</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.friends}</dt>
                        <dd className="text-black">Amis</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.movies}</dt>
                        <dd className="text-black">Films</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.shows}</dt>
                        <dd className="text-black">Séries</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.streak_days}</dt>
                        <dd className="text-black">Jours consécutifs</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.time_on_movies}H</dt>
                        <dd className="text-black">Temps passé sur les films</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">{counts.time_on_tv}H</dt>
                        <dd className="text-black">Temps passé sur les séries</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
