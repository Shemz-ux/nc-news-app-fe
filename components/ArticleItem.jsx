import { useParams } from "react-router-dom"
import { fetchArticleByID } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import formatDate  from "../hooks/formatDate";
import CommentSection from "./CommentSection";
import Vote from "./Vote";

function ArticleItem(){
    const {article_id} = useParams()

    const {data: article, loading, error } = useApiRequests(fetchArticleByID, article_id)
    // const [votes, setVotes] = useState()

    if (loading) return <p>Loading article...</p>

    if (error) {
        return <p>Something is not rightttt</p>
    }
    
    const {title, article_img_url, author, body, created_at, votes} = article

    // const handleLike = () => {
    //     setLikesCount((currentLikesCount) => currentLikesCount + 1);
    //     postLike();
    //   };


    return (
        <div className="read_article">
            <h2>{title}</h2>
            <img src={article_img_url} alt={title} />
            <div className="inline">
                <p className="author">Written by {author}</p>
                <p className="date">{formatDate(created_at)}</p>
            </div>
            <div className="vote_comment">
                    <Vote article_id={article_id} vote={votes}/>
            </div>
            <p>{body}</p>
            <div className="comment_section">
                <h3>Comments</h3>
                <CommentSection article_id={article_id}/>
            </div>
        </div>
    )
}

export default ArticleItem