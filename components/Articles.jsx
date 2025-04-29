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

    return (<div className="article_container d-flex flex-column align-items-center">
        {query ? (
          <h2
            className="subheader mt-2"
            style={{ fontWeight: "bold", fontSize: "30px", color: "grey" }}
          >
            {topicHeader}
          </h2>
        ) : (
          <h2
            className="subheader mt-3 mb-3"
            style={{ fontWeight: "bold" }}
          >
            Top stories
          </h2>
        )}
        <ArticleCard articles={articles} />
      </div>)
}

export default Articles;