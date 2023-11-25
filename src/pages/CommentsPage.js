import {Component} from "react";
import {Comments} from "../components/CommentContainer";

class CommentsPage extends Component {
    render() {
        return (
            <div>
                <Comments/>
            </div>
        );
    }
}

export {
    CommentsPage
}