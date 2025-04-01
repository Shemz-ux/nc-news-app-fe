import { updateArticleVotes } from "../src/api";
import { useState } from "react";

function Vote({article_id, vote}){
    const [currentVotes, setCurrentVotes] = useState(0)
    const [error, setError] = useState(null)

     const handleLike = () => {
        updateArticleVotes(article_id).catch(()=>{
            setCurrentVotes((current_votes)=>{
                return current_votes - 1
            })
            setError("Your vote was not successful. Please try again!")
        })
        setCurrentVotes((current_votes) => current_votes + 1);
      };

    return (
        <>
            <button onClick={handleLike}>Votes: {currentVotes + vote }</button>
        </>
    )
}

export default Vote;