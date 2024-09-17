import {Link} from "react-router-dom";

// Code: App component
function Home() {
  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen w-screen relative">
          <video src="../../public/videos/homepage-video.mp4" className="absolute inset-0 z-0 object-cover w-full h-full" autoPlay loop muted></video>
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <img src="../../public/pictures/logo-previously-white.png" alt="Logo" className="h-auto w-88 mb-5 z-20" />
          <h1 className="text-6xl text-white font-bold z-20 mb-2">Bienvenue sur PreviouslyOn</h1>
          <p className="text-3xl text-white z-20">Ici vous pouvez trouver des informations sur le projet PreviouslyOn (A CHANGER)</p>
          <Link to={'/series'}>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black ease-in duration-300 rounded-full p-4 px-6 mt-5 w-full z-30 relative text-xl text-white  font-bold animate-bounce">
              Consultez les séries
          </button>
          </Link>
        </div>
    </>
  )
}

export default Home;
