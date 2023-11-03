import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Episode} from "./Episode";
import css from "./Episodes.module.css"
import {episodeServices} from "../../services";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [query,setQuery] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    let page = query.get('page');

    useEffect(() => {
        episodeServices.getEpisode(query.get('page')).then(({data}) => {
            console.log(data);
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [page])


    const prev = () => {
        setQuery((prev)=>{
            prev.set('page', `${+prev.get('page')-1}`)
            return prev
        })
    }
    const next = () => {
        setQuery((prev)=>{
            prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })
    }

    return (
        <div>
            <div className={css.episodeHeader}>Rick & Morty</div>
            <div className={css.Episodes}>
                {episodes.map((episod) => <Episode key={episod.id} episod={episod}/>)}
            </div>
            <div className={css.EpisodesBtn}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    )
}
export {Episodes}