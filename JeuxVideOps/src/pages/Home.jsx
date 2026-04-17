import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <Header />
            
            <div class="min-h-screen bg-linear-to-r from-slate-500 to-slate-800 flex justify-around items-center">
                <div class="flex flex-col justify-center border-gray-900 shadow-2xl rounded-2xl w-96 h-96 bg-slate-400 p-2">
                    <h2 class="flex text-2xl underline">Bienvenue sur JeuxVideOps</h2>
                    <p class="flex text-justify mt-4">Le but de ce projet est d'automatiser une suite de tests unitaire et fonctionnel pour le bon déroulement des deux jeux que l'on va donc pouvoir vous proposer sur le site.</p>
                </div>
                <div class="flex border-gray-900 shadow-2xl rounded-2xl w-96 h-96 bg-slate-400 top-24"></div>
            </div>
            <Footer />
        </>
    );
}

export default Home;