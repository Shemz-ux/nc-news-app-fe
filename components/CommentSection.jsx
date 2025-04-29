import useApiRequests from "../hooks/apiRequests";
import {dateFormatter}from "../utils/formatDate";
import { deleteComment, fetchCommentsByID } from "../src/api";
import { useState } from "react";
import Comment from "./Comment";
import { MdDelete } from "react-icons/md";

function CommentSection({ article_id }) {
    const { data: comments, loading, error } = useApiRequests(fetchCommentsByID, article_id);
    const [deleteMsg, setDeleteMsg] = useState(null);

    // useContext for this next time
    const loggedInUser = 'grumpy19'

    const handleSubmit = (e, comment_id) => {
        e.preventDefault();


        deleteComment(comment_id).then(()=>{setTimeout(() => location.reload(), 0)})
        .catch(()=>{
            setDeleteMsg("A comment cannot be deleted twice!")
        })

        setDeleteMsg(null)
        setDeleteMsg("Comment has been successfully deleted!")
    };

    if (loading) return <p>Loading comments section...</p>;

    if (error) return <p>Could not load comments.</p>;

    return (
        <div className="d-flex flex-column align-items-center mt-5">
                <Comment/>
                {comments.map(({ comment_id, author, body, created_at}) => (
                    <div class="comment_card card mb-3 mt-3" style={{maxWidth: "55rem"}} key={comment_id}>
                        <div class="card-body">
                            <p class="card-text"><small class="text-body-secondary">{author} {' • '} {dateFormatter(new Date(created_at))} </small></p>
                            <p class="card-text">{body}</p>
                        {loggedInUser === author ? 
                        <MdDelete size={25} className="delete-icon mt-3" style={{cursor: "pointer"}} onClick={(e) => handleSubmit(e, comment_id)}/>: null}
                        </div>
                    </div>
                ))}

        </div>
    );
}

export default CommentSection;