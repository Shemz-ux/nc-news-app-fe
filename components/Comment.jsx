import { useParams } from "react-router-dom"
import { postCommentByID } from "../src/api"
import { useState} from "react"

function Comment() {
    const { article_id } = useParams();
    const [submitComment, setSubmitComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const { user, body } = event.target.elements;
        const newComment = {
            username: user.value,
            body: body.value,
        };

        postCommentByID({ article_id, ...newComment })
            .then(() => {
                body.value = ""; 
                user.value = "";
                setSubmitComment("Your comment has been posted!");
                setTimeout(location.reload(), 3000)
            })
            .catch(() => {
                setSubmitComment("Could not post comment, please try again.");
            });
    };
    
    return (
        <>
        <div className="comment">
        <h3>Leave a comment</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="user" name="user" placeholder="Enter username..." required/>
            <label htmlFor="comment">Comment:</label>
            <textarea rows="4" id="body" cols="100"type="text" name="body" placeholder="Add a comment..." required/>
            <input type="submit" value="Submit"/>
        </form>
            <p>{submitComment}</p>
        </div>
        </>
)
}

export default Comment;