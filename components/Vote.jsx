import { VoteContext } from "../context/VoteContext";
import { updateArticleVotes } from "../src/api";
import { useState, useContext } from "react";

function Vote({article_id, vote}){
    const [currentVotes, setCurrentVotes] = useState(0)
    const [error, setError] = useState(null)


     const handleVote = (voted) => {
        updateArticleVotes(article_id, voted).catch(()=>{
            setCurrentVotes((current_votes)=>{
                return current_votes - voted
            })
            setError("Your vote was not successful. Please try again!")
        })
        setError(null)
        setCurrentVotes((current_votes) => current_votes + voted);
      };

    return (
        <>
            <p>Votes: {currentVotes + vote }</p>
                <button onClick={() => handleVote(1)}>👍</button>
                <button onClick={() => handleVote(-1)}>👎</button>
            <p>{error}</p>
        </>
    )
}

export default Vote;