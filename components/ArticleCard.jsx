import formatDate from "../hooks/formatDate";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router";

function ArticleCard({articles}){
    let navigate = useNavigate();

    const handleClick = (article_id) => { 
        navigate(`/articles/${article_id}`)
    };

    return (
        <div className="card_container"> 
            {articles.map(({ article_id, title, article_img_url, author, votes, comment_count, created_at}) => (
                <div className="article_cards" key={article_id} id={article_id} onClick={() => handleClick(article_id)}>
                    <img src={article_img_url} alt={title} />
                    <p>{formatDate(created_at)}</p>
                    <h3>{title}</h3>
                    <p>Written by {author}</p>
                    <div className="inline">
                    <p>👍 {votes} votes</p>
                    <p>💬 {comment_count} comments</p>
                    </div>
                </div>
            ))}
            </div>
    )
}

export default ArticleCard;