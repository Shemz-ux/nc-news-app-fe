import { Link } from "react-router-dom";
import useApiRequests from "../hooks/apiRequests";
import { fetchTopics } from "../src/api";
import { useNavigate } from "react-router-dom";

function Header(){
    const { data: topics,} = useApiRequests(fetchTopics);

    let navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/?topic=${slug}`)
    };

    return (<header>
        <div className="head">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>NC News</h1>
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