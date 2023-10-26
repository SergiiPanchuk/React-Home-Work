import css from "./Todo.module.css"

const Todo = ({data}) => {
    const {userId, id, title, completed} = data

    return (
        <div className={css.Todo}>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>completed:{completed ? 'true' : 'false'}</div>
        </div>
    );
};

export {Todo};