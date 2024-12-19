// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" text-center flex flex-col space-y-6">
      <div className=" relative flex justify-center">
        <img className=" absolute" src="banniere.png" alt="Bannière" />
        <h1 className=" text-jaune-clair text-6xl font-flop pt-12 z-10">
          Secret Santa
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center gap-12">
        <img className=" w-2/3 pt-24" src="livre.png" alt="Livre" />
        <button
          onClick={onStart}
          className="w-2/4 flex justify-center bg-jaune-clair text-rouge  py-3 rounded-full shadow-lg hover:bg-gray-100 transition font-bold text-lg"
        >
          Commencer
        </button>
      </div>
      <div className="flex justify-between pl-8 items-center ">
        <img className="h-fit" src="canne.png" alt="Canne" />
        <img className="" src="cookies.png" alt="Cookies" />
      </div>
    </div>
  );
}
