import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            <li>{
                tuitArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
                )

            }
            </li>
        </ul>
    );
};
export default TuitList;