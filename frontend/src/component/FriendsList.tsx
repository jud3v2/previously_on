import { useState } from 'react';
import AddFriendModal from './AddFriendModal';
import { IoMdAdd } from "react-icons/io";

export default function FriendsList({ friends }: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!friends || friends.length === 0) {
        return <p>Aucun ami trouvé.</p>;
    }


  return (
      <div className="w-full max-w-md p-4 bg-white border border-black rounded-lg shadow sm:p-8">
          <div className=" items-center  mb-4">
            <div className="flex items-center justify-between">
            <p className={'text-xl ml-5 underline'}>Mes Ami(es) :</p>
                <div><button
                        className='flex items-center w-full border border-black rounded-full p-2 text-black hover:bg-black hover:text-white duration-300 ease-in'
                        onClick={() => setIsModalOpen(true)}
                        >
                        <IoMdAdd /> Ajouter un ami
                </button></div>
               </div>
          </div>
          <div className="flow-root">
              <ul role="list" className="divide-y divide-black">
                  {friends.map((friend: any) => (
                      <li key={friend.id} className="py-3 sm:py-4">
                          <div className="flex items-center">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src={friend.avatar || '/pictures/default-pic.jpg'} alt={`Avatar de ${friend.login}`} />
                              </div>
                              <div className="flex flex-row justify-between flex-1 min-w-0 ms-4">
                                  <p className="text-lg font-medium text-black truncate">
                                      {friend.login}
                                  </p>
                                  <p className="text-lg font-medium text-black truncate">
                                      {friend.xp} XP
                                  </p>
                              </div>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
          <AddFriendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
  );
}
