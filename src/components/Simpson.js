import {RenderSimpsons} from "./RenderSimpsons";


const Simpson = () => {
    const simpsons = [
        {
            id: 1,
            name: "Homer Simpson",
            age: 45,
            image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        },
        {
            id: 2,
            name: "Marge Simpson",
            age: 40,
            image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
        },
        {
            id: 3,
            name: "Bart Simpson",
            age: 15,
            image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
        },
        {
            id: 4,
            name: "Lisa Simpson",
            age: 12,
            image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
        },
        {
            id: 5,
            name: "Maggie Simpson",
            age: 1,
            image: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"
        }
    ]
    return (
        <div>
            {simpsons.map(value => <RenderSimpsons key={value.id} item={value}/>)}
        </div>
    );
};

export {Simpson};