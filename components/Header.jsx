import { Link } from "react-router-dom";
import useApiRequests from "../hooks/apiRequests";
import { fetchTopics } from "../src/api";

function Header(){
  const currentDate = new Date().toUTCString()

    const { data: topics,} = useApiRequests(fetchTopics);

  
    return (<header>
        <div className="head">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>NC News</h1>
            <p>{currentDate}</p>
          </Link>
          <div className="topic_dropdown">
            <button className="dropbtn">Topics‣</button>
            <div className="dropdown-content">
            {topics.map(({ slug }) => (
                <Link key={slug} to={`/?topic=${slug}`}>{slug}</Link>
            ))}
                </div>
            </div>

        </div>
      </header>)
}

export default Header;