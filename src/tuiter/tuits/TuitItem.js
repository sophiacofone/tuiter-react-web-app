import React from "react";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitItem = (
    {
        tuit = {

        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-2 p-0">
                    <img className="rounded-circle w-100 float-right" src={`./images/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}>
                        </i>
                        <span className="fw-bold">{tuit.userName}</span>
                        <span className="m-lg-1"><i className="bi bi-check-circle-fill"></i></span>
                        <span className="text-muted">{tuit.handle}</span>
                        <span className="text-muted"> &#183; </span>
                        <span className="text-muted">{tuit.time}</span>
                        <span className="text-muted">{tuit._id}</span>
                    </div>
                    <div className="text-muted">{tuit.tuit}</div>
                </div>
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
};
export default TuitItem;