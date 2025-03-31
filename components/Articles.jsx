import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { fetcharticles } from "../src/api";

function Articles(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetcharticles()
            .then((res) => {
                setArticles(res); // Store articles in state
            })
    }, []);

    return (<div className="article_container">
        <h2 className="subheader">Top stories</h2>
        <ArticleCard articles={articles}/>
    </div>)
}

export default Articles;