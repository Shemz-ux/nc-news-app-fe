import ArticleCard from "./ArticleCard";
import { fetcharticles } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import { useSearchParams } from "react-router";

function Articles(){
    const [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get('topic')
    const {data: articles, loading, error } = useApiRequests(fetcharticles, query)

    if (loading) return <p>Loading stories...</p>

    if (error) {
        return <p>Something is not rightttt</p>
    }
   
    let topicHeader = query ? query.replace(query[0], query[0].toUpperCase()) : null;

    return (<div className="article_container">
        {query ? <h2 className="subheader">{topicHeader}</h2>: <h2 className="subheader">Top stories</h2>}
        <ArticleCard articles={articles}/>
    </div>)
}

export default Articles;