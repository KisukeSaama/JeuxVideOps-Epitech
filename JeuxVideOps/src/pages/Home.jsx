import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

function Home() {
    return (
        <PageTransition>
            <Header />
            
            <div className="min-h-screen bg-linear-to-r from-fuchsia-900 to-purple-900 flex justify-center items-center xl:flex-row flex-col xl:gap-16 gap-10 px-6 py-20">
                <div className="border border-fuchsia-500/30 shadow-2xl shadow-fuchsia-500/20 rounded-2xl max-w-xl w-full bg-fuchsia-950/80 backdrop-blur-sm">
                    <div className="flex flex-col p-8 xl:p-10 space-y-4">
                        <h2 className="text-3xl font-bold text-fuchsia-100 border-b-2 border-fuchsia-400 pb-2 inline-block">
                            Bienvenue sur JeuxVideOps
                        </h2>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Le but de ce projet est d'automatiser une suite de tests unitaire et fonctionnel pour le bon déroulement des deux jeux que l'on va donc pouvoir vous proposer sur le site.
                        </p>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Les tests unitaires vont permettre de vérifier que les fonctions de base des jeux fonctionnent correctement.
                        </p> 
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Tandis que les tests fonctionnels vont simuler des scénarios d'utilisation pour s'assurer que les jeux offrent une expérience utilisateur fluide et sans bugs.
                        </p>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Le projet a été réalisé par :
                        </p>
                        <ul className="text-fuchsia-100 text-justify leading-relaxed flex flex-row space-x-10">
                            <li>
                                <a href="https://github.com/Corentin-epitech" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:text-fuchsia-400 font-bold">
                                    🦦 Corentin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/KisukeSaama" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:text-fuchsia-400 font-bold">
                                    🦊 Jonathan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex max-w-xl w-full">
                    <img 
                        src="/images/arcade.jpg" 
                        alt="Borne d'arcade de présentation" 
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-fuchsia-500/30 ring-2 ring-fuchsia-400/40" 
                    />
                </div>
            </div>

            <Footer />
        </PageTransition>
    );
}

export default Home;