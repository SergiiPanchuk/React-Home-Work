const PostInfo = ({postInfo}) => {
    const {id, title, body, userId} = postInfo;
    return (
        <div>
            <h3>{userId}</h3>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export {PostInfo};