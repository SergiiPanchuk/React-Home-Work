

const Comment = ({comment}) => {

    const {body, email, id, name, postId} = comment

    return (
        <div>
            <div>body: {body}</div>
            <div>email: {email}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>postId: {postId}</div>
        </div>
    );
};

export {Comment};