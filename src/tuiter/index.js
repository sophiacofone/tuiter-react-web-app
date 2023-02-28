import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar"
import WhoToFollowList
    from "./who-to-follow-list/who-to-follow-list";
import Explore from "./explore";
import {Link}
    from "react-router-dom";
function Tuiter() {
    return (
        <div>
        <div>   <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Explore/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </div>
    );
}

export default Tuiter