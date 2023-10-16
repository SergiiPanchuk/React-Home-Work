const RenderRickandmorty = ({value}) => {
    const {name, status, species, gender, image} = value;
    return (
        <div>
            <h2>name:{name}</h2>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <h3>gender: {gender}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {RenderRickandmorty};