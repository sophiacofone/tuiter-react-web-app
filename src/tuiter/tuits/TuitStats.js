import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {createTuit, updateLikes} from "./tuits-reducer";


const TuitStats = (
    {
        tuit = {
        }
    }
) => {
    const dispatch = useDispatch();
    const handleLikeClick = () => {dispatch(updateLikes(tuit._id))
    }

    return(
        <div className="row text-center mt-1">
            <div className="col-3">
                <div>
                    <span><i className="bi bi-chat m-lg-3"></i></span>
                    <span>{tuit.comments}</span>
                </div>
            </div>
            <div className="col-3">
                <div>
                    <span><i className="bi bi-arrow-left-right m-lg-3"></i></span>
                    <span>{tuit.retuits}</span>
                </div>
            </div>
            <div className="col-3">
                <div>
                    <span>
                        <i
                            className={tuit.liked ? 'bi bi-heart-fill text-danger m-lg-3' : 'bi bi-heart m-lg-3'}
                            onClick={handleLikeClick}
                        >
                        </i>
                    </span>
                    <span>{tuit.likes}</span>
                </div>
            </div>
            <div className="col-3">
                <div>
                    <span><i className="bi bi-arrow-bar-up"></i></span>
                </div>
            </div>
        </div>
    );
};
export default TuitStats;