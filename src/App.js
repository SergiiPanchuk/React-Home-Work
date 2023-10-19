import {Posts} from "./components/Posts/Posts";
import {Launches} from "./components/spacex/launches/Launches";



const App = () => {
    return (
        <div>
            <Posts/>
            <Launches/>
        </div>
    );
};

export {App};