import {Link} from "react-router-dom";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import Nav from "../nav";
import React from "react";
import Home from "./home";



function Tuiter() {
    return (
        <div>

            <div>
                <Nav/>
            </div>

            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-9 col-xl-8"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
            </div>

        </div>
    );
}


export default Tuiter