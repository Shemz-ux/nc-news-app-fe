import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router";

function ArticleCard({articles}){
    const navigate = useNavigate()

    const handleClick = (article_id) => {
        navigate(`/articles/${article_id}`)
    };

    return (
        <div className="card_container"> 
            {articles.map(({ article_id, title, article_img_url, author }) => (
                <div className="article_cards" key={article_id} id={article_id} onClick={() => handleClick(article_id)}>
                    <img src={article_img_url} alt={title} />
                    <h3>{title}</h3>
                    <p>By {author}</p>
                </div>
            ))}
            </div>
    )
}

export default ArticleCard;