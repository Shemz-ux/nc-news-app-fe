import { useParams } from "react-router-dom"
import { fetchArticleByID } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import formatDate  from "../hooks/formatDate";

function ArticleItem(){
    const {article_id} = useParams()

    const {data: article, loading, error } = useApiRequests(fetchArticleByID, article_id)

    console.log(article)

    if (loading) return <p>Loading article...</p>

    if (error) {
        return <p>Something is not rightttt</p>
    }
    
    const {title, article_img_url, author, body, created_at} = article


    return (
        <div className="read_article">
            <h2>{title}</h2>
            <img src={article_img_url} alt={title} srcset="" />
            <div className="inline">
                <p className="author">Written by {author}</p>
                <p className="date">{formatDate(created_at)}</p>
            </div>
            <p>{body}</p>
            <div className="like_comment"></div>
            <div className="comments"></div>
        </div>
    )
}

export default ArticleItem