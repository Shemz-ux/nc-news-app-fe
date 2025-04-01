import ArticleCard from "./ArticleCard";
import { fetcharticles } from "../src/api";
import useApiRequests from "../hooks/apiRequests";

function Articles(){
    const {data: articles, loading, error } = useApiRequests(fetcharticles)

    if (loading) return <p>Loading stories...</p>

    if (error) {
        return <p>Something is not rightttt</p>
    }

    return (<div className="article_container">
        <h2 className="subheader">Top stories</h2>
        <ArticleCard articles={articles}/>
    </div>)
}

export default Articles;