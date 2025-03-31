import { Link } from "react-router-dom";

function Header(){
    return (<header>
        <div className="head">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black'}}><h1>NC News</h1></Link>
            </div>
            </header>)
}

export default Header;