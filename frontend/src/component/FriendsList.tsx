export default function FriendsList({ friends }: any) {


  if (!friends || friends.length === 0) {
      return <p>Aucun ami trouvé.</p>;
  }
  

  return (
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Mes ami(es)</h5>
          </div>
          <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {friends.map((friend: any) => (
                      <li key={friend.id} className="py-3 sm:py-4">
                          <div className="flex items-center">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src={friend.avatar || '/pictures/default-pic.jpg'} alt={`Avatar de ${friend.login}`} />
                              </div>
                              <div className="flex-1 min-w-0 ms-4">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      {friend.login}  {/* Utilisation du champ 'login' pour le nom d'utilisateur */}
                                  </p>
                                  {/* Si tu veux afficher plus d'infos, tu peux rajouter un autre champ si nécessaire */}
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  {friend.xp || 'N/A'} XP  {/* Affiche les points d'XP */}
                              </div>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}
