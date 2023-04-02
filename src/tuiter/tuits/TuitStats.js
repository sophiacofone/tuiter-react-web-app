import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";


const TuitStats = (
    {
        tuit = {
        }
    }
) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(tuit.liked); // state variable to track icon color

    const handleLikeClick = () => {
        if (liked) {
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1 // decrease likes by 1
            }));
            setLiked(false); // change icon color to grey
        } else {
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1 // increase likes by 1
            }));
            setLiked(true); // change icon color to red
        }
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
                            className={liked ? 'bi bi-heart-fill text-danger m-lg-3' : 'bi bi-heart m-lg-3'}
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