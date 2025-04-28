import { Link } from "react-router-dom";
import useApiRequests from "../hooks/apiRequests";
import { fetchTopics } from "../src/api";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { SiApplenews } from "react-icons/si";

function Header(){
  const currentDate = new Date().toDateString()

    const { data: topics} = useApiRequests(fetchTopics);

  
    return (
        <div className="head p-3 mb-2">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
         <h1 style={{fontWeight: "bold", fontSize: "50px"}} >NC News </h1>
          </Link>
          <div className="topic_dropdown">
            <button className="dropbtn">Topics
              <IoMdArrowDropdownCircle className="drop-down" /></button>
            <div className="dropdown-content">
            {topics.map(({ slug }) => (
                <Link key={slug} to={`/?topic=${slug}`}>{slug}</Link>
            ))}
                </div>
            </div>

        </div>
     )
}

export default Header;