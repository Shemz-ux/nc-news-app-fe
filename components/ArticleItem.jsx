import { useParams } from "react-router-dom"
import { fetchArticleByID, updateArticleVotes } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import {formatDate}  from "../utils/formatDate";
import CommentSection from "./CommentSection";
import { useState} from "react";
import Comment from "./Comment";

function ArticleItem(){
    const {article_id} = useParams()
    const [clicked, setClicked] = useState(null)
    const [currentVotes, setCurrentVotes] = useState(0)
    const [commentError, setCommentError] = useState(null)
    const [hasVoted, setHasVoted] = useState(false)


    const {data: article, loading, error } = useApiRequests(fetchArticleByID, article_id)

    const handleClick = () => {
        setClicked(true)
    };

    if (loading) return <p>Loading article...</p>

    if (error) {
        return <p>Article could not be found.</p>
    }
    
    const {title, article_img_url, author, body, created_at, votes} = article

    const handleVote = (voted) => { 
            updateArticleVotes(article_id, voted).catch(()=>{
                setCurrentVotes((current_votes)=>{
                    return current_votes - voted
                })
                setCommentError("Your vote was not successful. Please try again!")
            })
    
            setHasVoted(voted)
            setCommentError(null)
            setCurrentVotes((current_votes) => current_votes + voted);
          };

    return ( 
        <>
        
        <div className="read_article">
            <h2>{title}</h2>
            <img src={article_img_url} alt={title} />
            <div className="inline">
                <p className="author">Written by {author}</p>
                <p className="date">{formatDate(created_at)}</p>
            </div>
            <p>{body}</p>
                {/* <p>Votes: {currentVotes + votes }</p> */}
            <div className="inline">
                <div className="vote">
                    <button onClick={() => handleVote(1)} disabled={hasVoted === 1}>👍 {currentVotes + votes }</button>
                    <button onClick={() => handleVote(-1)} disabled={hasVoted === -1}>👎</button>
                    <p style={{ color: 'red' }}>{commentError}</p>
                </div>

                <div className="comment_box">
                    <form>
                        <input type="text" id="comment" placeholder="Leave a comment" onClick={()=>handleClick(article_id)}/>
                    </form>
                </div>
            </div>
        </div>
        {clicked ? <Comment/> : (
            <div className="comment_section">
                <h3>Comments</h3>
                <CommentSection article_id={article_id}/>
            </div>
        )}
        </>
    )
}

export default ArticleItem;