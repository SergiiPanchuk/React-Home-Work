const RenderSimpsons = ({item}) => {
    const {name, age, image} = item;
    return (
        <div>
            <h2>name: {name}</h2>
            <h3>age: {age}</h3>
            <img src={image} alt="name"/>
        </div>
    );
};

export {RenderSimpsons};