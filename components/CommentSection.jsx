import useApiRequests from "../hooks/apiRequests";
import formatDate from "../hooks/formatDate";
import { fetchCommentsByID } from "../src/api";

function CommentSection ({article_id}){
    const {data: comments, loading, error} = useApiRequests(fetchCommentsByID, article_id)

    if (loading) return <p>Loading comments...</p>

    if (error) {
        return <p>Something is not rightttt</p>
    }

    return (
        <>
            {comments.map(({comment_id, author, body, created_at}) => (
            <div className="comment_card" key={comment_id}>
                <div className="inline">
                    <h4 className="author">{author}</h4>
                    <p className="date">{formatDate(created_at)}</p>
                </div>
                <p>{body}</p>
            </div>
            ))}
        
        </>
    )
}

export default CommentSection;