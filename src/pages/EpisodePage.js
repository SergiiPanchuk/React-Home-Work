import {Episodes} from "../components";
import {useSelector} from "react-redux";

const EpisodesPage = () => {
    const {errors} = useSelector(state => state.episodes);

    return (
        <div>
            {errors && <h2>{JSON.stringify(errors)}</h2>}
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};