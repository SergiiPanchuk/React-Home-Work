import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const {title,id} =post;

    const navigate = useNavigate();
    return (
        <div>
            title:{title}
            <button onClick={()=>navigate(`${id}`)}>Post details</button>
        </div>
    );
};

export {Post};