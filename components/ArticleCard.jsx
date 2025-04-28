import { dateFormatter } from "../utils/formatDate";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Vote from "./Vote";

function ArticleCard({articles}){
    let navigate = useNavigate();

    const handleClick = (article_id) => { 
        navigate(`/articles/${article_id}`)
    };

    return (
        <div className="card_container"> 
            {articles.map(({ article_id, title, article_img_url, author, comment_count, created_at}) => (
                <div key={article_id} className="article_cards card my-3" style={{width: "35rem"}} onClick={() => handleClick(article_id)}>
                    <img src={article_img_url} className="card-img-top" alt={title} />
                    <div className="card-body py-3">
                        <h3 className="card-title" style={{fontWeight: "bold"}}>{title}</h3>
                        <div className="mt-4 d-flex gap-3">
                            <Vote article_id={article_id}/>
                            <div className="d-inline-flex gap-1 align-items-center border rounded-pill p-2" style={{height: "35px"}}>
                                <FaRegComment size={15}/> {comment_count}
                                </div>
                            </div>
                        </div>
                    <div className="card-footer py-2" style={{background: "none"}}> <small className="text-body-secondary">{dateFormatter(new Date(created_at))} {' • '} {author}</small></div>
                    </div>
            ))}
            </div>
    )
}

export default ArticleCard;