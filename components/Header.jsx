import { Link } from "react-router-dom";
import useApiRequests from "../hooks/apiRequests";
import { fetchTopics } from "../src/api";
import { IoMdArrowDropdownCircle } from "react-icons/io";

function Header(){
  const currentDate = new Date().toDateString()

    const { data: topics} = useApiRequests(fetchTopics);

  
    return (<header>
        <div className="head">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1 style={{fontWeight: "bold"}} >NC News</h1>
            {/* <p>{currentDate}</p> */}
          </Link>
          <div className="topic_dropdown">
            <button className="dropbtn">Topics<IoMdArrowDropdownCircle size={18}/></button>
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