import Explore from "./explore";
import Home from "./home";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
// import HomeComponent from "./home";

function Tuiter() {
    return (
        <div>
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
        <Home/>
        </div>
    );
}

export default Tuiter