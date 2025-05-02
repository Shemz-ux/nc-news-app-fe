import { useParams } from "react-router-dom"
import { postCommentByID } from "../src/api"
import { useState} from "react"

function Comment() {
    const { article_id } = useParams();
    const [submitComment, setSubmitComment] = useState("");
    const [commentBody, setCommentBody] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const { body } = event.target.elements;

        const newComment = {
            username: 'grumpy19',
            body: body.value,
        };

        postCommentByID({ article_id, ...newComment })
            .then(() => {
                body.value = ""; 
                setCommentBody("")
                setSubmitComment("Comment has been posted!");
                setTimeout(() => location.reload(), 0)
            })
            .catch(() => {
                setSubmitComment("Could not post comment, please try again.");
            });
    };
    
    return (
        <div className="mt-1 mx-auto" style={{width: "100%",
            maxWidth: "60rem",
            padding: "0 1rem",  
            boxSizing: "border-box",}}>
            <h5 className="flex-end mb-3">Comments</h5>
            <form className="form-floating" onSubmit={handleSubmit} > 
                <textarea className="form-control" name="body" placeholder="Leave a comment here" id="floatingTextarea2" 
                value={commentBody} 
                onChange={(e) => setCommentBody(e.target.value)} 
                style={{height: "100px"}}></textarea>
                <label htmlFor="floatingTextarea2">Leave a comment</label>
                <button
                    type="submit"
                    disabled={!commentBody.trim()}
                    style={{
                        marginTop: "1rem",
                        border: "1px solid #ccc",
                        background: "none",
                        padding: "5px 12px",
                        borderRadius: "4px",
                        cursor: commentBody.trim() ? "pointer" : "not-allowed",
                        opacity: commentBody.trim() ? 1 : 0.5,
                    }}
                >   Post
                </button>
                </form>
            <p><small className="post-comment text-body-secondary mt-2">{submitComment}</small></p>
        </div>
        )
}

export default Comment;