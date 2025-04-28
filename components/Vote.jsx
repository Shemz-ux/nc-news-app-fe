import { useState } from "react"
import { fetchArticleByID, updateArticleVotes } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

function Vote({article_id}){
    const [currentVotes, setCurrentVotes] = useState(0)
    const [hasVoted, setHasVoted] = useState(false)
    const [voteMessage, setVoteMessage] = useState(null)

    const {data: article} = useApiRequests(fetchArticleByID, article_id)

    const {votes} = article

    const handleVote = (voted) => { 
                updateArticleVotes(article_id, voted).catch(()=>{
                    setCurrentVotes((current_votes)=>{
                        return current_votes - voted
                    })
                    voteMessage("Your vote was not successful. Please try again!")
                })
        
                setHasVoted(voted)
                setVoteMessage(null)
                setCurrentVotes((current_votes) => current_votes + voted);
              };

    return (
        <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-1 mb-4">
            <BiUpvote 
                size={20} 
                onClick={() => handleVote(1)}
                style={{
                    cursor: hasVoted === 1 ? 'not-allowed' : 'pointer',
                    opacity: hasVoted === 1 ? 0.5 : 1,
                    flexShrink: "0"
                }} 
                disabled={hasVoted === 1}
            />
            <span>{currentVotes + votes}</span>
            <BiDownvote
                size={20}
                onClick={() => handleVote(-1)}
                style={{
                    cursor: hasVoted === -1 ? 'not-allowed' : 'pointer',
                    opacity: hasVoted === -1 ? 0.5 : 1,
                    flexShrink: "0",
                }} 
                disabled={hasVoted === -1} 
            />
        </div>
        
    )

}

export default Vote;