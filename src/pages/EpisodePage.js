import {useSelector} from "react-redux";

import {Episodes} from "../components";

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