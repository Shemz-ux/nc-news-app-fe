import useApiRequests from "../hooks/apiRequests";
import formatDate from "../hooks/formatDate";
import { deleteComment, fetchCommentsByID } from "../src/api";
import { useState } from "react";

function CommentSection({ article_id }) {
    const { data: comments, loading, error } = useApiRequests(fetchCommentsByID, article_id);
    const [clickedCommentId, setClickedCommentId] = useState(null);
    const [deleteMsg, setDeleteMsg] = useState(null);
    const [enteredUsername, setEnteredUsername] = useState("");

    const handleClick = (comment_id) => {
        setClickedCommentId(comment_id);
    };

    const handleSubmit = (event, author) => {
        event.preventDefault();

        if (enteredUsername !== author) {
            setDeleteMsg("Incorrect username! You can only delete your own comments.");
        }

        deleteComment(clickedCommentId).catch(()=>{
            setDeleteMsg("A comment cannot be deleted twice!")
        })

        setDeleteMsg(null)
        setDeleteMsg("Comment has been successfully deleted!")
        setEnteredUsername(""); 
    };

    if (loading) return <p>Loading comments section...</p>;

    if (error) return <p>Could not load comments.</p>;

    console.log(comments)

    return (
        <>
            {comments.map(({ comment_id, author, body, created_at, votes: comment_count }) => (
                <div className="comment_card" key={comment_id}>
                    <div className="inline">
                        <h4 className="author">{author}</h4>
                        <p className="date">{formatDate(created_at)}</p>
                    </div>
                    <p>{body}</p>
                    <p>Votes: {comment_count}</p>
                    <button onClick={() => handleClick(comment_id)}>Delete</button>

                    {clickedCommentId === comment_id && (
                        <div>
                            <p>Please confirm username to delete!</p>
                            <div className="comment">
                            <form onSubmit={(event) => handleSubmit(event, author)}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter username..."
                                    value={enteredUsername}
                                    onChange={(event) => setEnteredUsername(event.target.value)}
                                    required
                                />
                                <button type="submit">Confirm</button>
                                {deleteMsg && <p>{deleteMsg}</p>}
                            </form>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default CommentSection;