import React from "react";
import TuitStats from "./TuitStats";
import {useSelector} from "react-redux";

const TuitItem = (
    {
        tuit = {
        }
    }
) => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-2 p-0">
                    <img className="rounded-circle w-100 float-right" src={`./images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold">{tuit.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                        <span className="text-muted">{tuit.handle}</span>
                        <span className="text-muted"> &#183; </span>
                        <span className="text-muted">{tuit.time}</span>
                    </div>
                    <div className="text-muted">{tuit.tuit}</div>
                </div>
                {
                    tuitArray.map(tuit =>
                        <TuitStats
                            key={tuit._id}
                            tuit={tuit}/>
                    )

                }
            </div>
        </li>
    );
};
export default TuitItem;