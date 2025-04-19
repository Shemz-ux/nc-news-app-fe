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
        return <p>Could not load articles, please try again!</p>
    }
   
    let topicHeader = query ? query.replace(query[0], query[0].toUpperCase()) : null;

    return (<div className="article_container">
        {query ? <h3 className="subheader mt-3" style={{fontWeight: "bold"}}>{topicHeader}</h3>: <h3 className="subheader mt-3" style={{fontWeight: "bold"}}>Top stories</h3>}
        <ArticleCard articles={articles}/>
    </div>)
}

export default Articles;