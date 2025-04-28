import { useParams } from "react-router-dom"
import { fetchArticleByID, updateArticleVotes } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import {dateFormatter}  from "../utils/formatDate";
import CommentSection from "./CommentSection";
import { useState} from "react";
import Comment from "./Comment";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import Vote from "./Vote";

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
        <div className="d-flex justify-content-center mt-4">
            <div className="card mb-3" style={{ width: "60%" }}>
                <img src={article_img_url} className="card-img-top" alt={title} />
                <div className="card-body">
                <h2 className="card-title mb-3" style={{ fontWeight: "bold" }}>{title}</h2>
                <p className="card-text">{body}</p>
                <Vote article_id={article_id}/>

                {/* <div className="vote mt-0" style={{ display: 'flex', alignItems: 'center', gap: '5px', border: 'solid' }}>
                    <BiUpvote
                    size={30}
                    onClick={() => handleVote(1)}
                    style={{
                        cursor: hasVoted === 1 ? 'not-allowed' : 'pointer',
                        opacity: hasVoted === 1 ? 0.5 : 1,
                    }}
                    disabled={hasVoted === 1}
                    />
                    <span>{currentVotes + votes}</span>
                    <BiDownvote
                    size={30}
                    onClick={() => handleVote(-1)}
                    style={{
                        cursor: hasVoted === -1 ? 'not-allowed' : 'pointer',
                        opacity: hasVoted === -1 ? 0.5 : 1,
                    }}
                    disabled={hasVoted === -1}
                    />
                </div> */}

                <p className="card-text">
                    <small className="text-body-secondary">
                    {dateFormatter(new Date(created_at))} {' • '} {author}
                    </small>
                </p>
                </div>
            </div>
        </div>
        <CommentSection article_id={article_id}/>




        
        {/* <p style={{ color: 'red' }}>{commentError}</p>
        <div className="read_article"> */}
                {/* <div className="vote">
                    <button onClick={() => handleVote(1)} disabled={hasVoted === 1}>👍 {currentVotes + votes }</button>
                    <button onClick={() => handleVote(-1)} disabled={hasVoted === -1}>👎</button>
                    <p style={{ color: 'red' }}>{commentError}</p>
                </div> */}

                {/* <div className="comment_box">
                    <form>
                        <input type="text" id="comment" placeholder="Leave a comment" onClick={()=>handleClick(article_id)}/>
                    </form>
                </div> */}
        {/* </div>
        {clicked ? <Comment/> : (
            <div className="comment_section">
                <CommentSection article_id={article_id}/>
            </div>
        )} */}
        </>
    )
}

export default ArticleItem;