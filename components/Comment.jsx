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
            username: 'grumpy19',
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
        <div className="mt-2" style={{width: "60%"}}>
            <form className="form-floating" onSubmit={handleSubmit}> 
                <textarea className="form-control" name="body" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2">Leave a comment</label>
                </form>
                <input className= "mt-3"type="submit" value="Post"/>
            <p>{submitComment}</p>
        </div>
)
}

export default Comment;