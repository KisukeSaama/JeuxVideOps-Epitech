import Header from "../components/Header";
import Footer from "../components/Footer";

function Spaceinvaders() {

    return (
        <>
            <Header />
            
            <div className="min-h-screen bg-linear-to-r from-fuchsia-900 to-purple-900 flex justify-center items-center xl:flex-row flex-col xl:gap-16 gap-10 px-6 py-20">
                <div className="border border-fuchsia-500/30 shadow-2xl shadow-fuchsia-500/20 rounded-2xl max-w-xl w-full bg-fuchsia-950/80 backdrop-blur-sm">
                    <div className="flex flex-col p-8 xl:p-10 space-y-4">
                        <h2 className="text-3xl font-bold text-fuchsia-100 border-b-2 border-fuchsia-400 pb-2 inline-block">
                            SPACE INVADERS
                        </h2>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Le but du jeu est de détruire les invasions extraterrestres en utilisant un vaisseau spatial.
                        </p>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Le jeu est compatible sur PC, mobile et gamepad.
                        </p> 
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Prenez le contrôle de votre vaisseau et tirez sur les cibles qui s'approchent.
                        </p>
                        <p className="text-fuchsia-100 text-justify leading-relaxed">
                            Dans ce jeu, vous gérez les mouvements et les tirs de votre vaisseau.
                        </p>
                        
                        <div className="pt-6">
                            <a 
                                href="https://kisukesaama.github.io/SpaceInvaders/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block w-full bg-linear-to-r from-fuchsia-500 to-pink-600 hover:from-fuchsia-400 hover:to-pink-500 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg shadow-fuchsia-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-400/70 text-center"
                            >
                                Jouer maintenant
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="flex max-w-xl w-full">
                    <a href="https://kisukesaama.github.io/SpaceInvaders/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="/images/spaceinvaders.png" 
                            alt="Ecran d'acceuil de Space Invaders" 
                            className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-fuchsia-500/30 ring-2 ring-fuchsia-400/40" 
                        />
                    </a>
                </div>
            </div>
                    
            <Footer />
        </>
    );
}

export default Spaceinvaders;