import {Simpson} from "./components/Simpson";
import {Rickandmorty} from "./components/Rickandmorty";
import {FetchRick} from "./components/FetchRick";


const App = () => {
    return (
        <div>
            <h2>---------------------------------------Simpson-------------------------------------------</h2>
            <Simpson/>
            <h2>---------------------------------------RickAndMorty-------------------------------------------</h2>
            <Rickandmorty/>
            <h2>---------------------------------------RickAndMorty
                Fetch-------------------------------------------</h2>
            <FetchRick/>
        </div>
    );
};

export {App};