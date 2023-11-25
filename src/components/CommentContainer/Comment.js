import {Component} from "react";

class Comment extends Component {

    render() {
        const {body,id,email}=this.props.comments;
        return(
            <div>
                <div>body : {body}</div>
                <div>id : {id}</div>
                <div>email : {email}</div>
            </div>
        )
    }
}

export {
    Comment
}