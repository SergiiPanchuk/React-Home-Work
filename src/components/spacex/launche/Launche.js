import css from "./Launche.module.css"
const Launche = ({mission, launch, image}) => {

    return (
        <div className={css.Launche}>
            <p>mission:{mission}</p>
            <p>launch:{launch}</p>
            <img src={image} alt={mission}/>
        </div>
    );
};

export {Launche};