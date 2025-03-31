import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { fetchArticleByID } from "../src/api";

function ArticleItem(){
    const {article_id} = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
        fetchArticleByID(article_id).then((article_data) => {
           setArticle(article_data);
        });
     }, [article_id]);
  
    return (
        <div>
            <h2>Hello</h2>
        </div>
    )
}

export default ArticleItem