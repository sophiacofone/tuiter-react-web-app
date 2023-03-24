import React, { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';


const TuitStats = (
    {
        tuit = {
        }
    }
) => {
    // const {heartColor} = useSelector(state => state.tuits);
    // const [iconColor, setIconColor] = useState('black');
    //
    // const {count} = useSelector(state => state.tuits);
    // const[counter, setCounter] = useState(count);

    // const handleClick = () => {
    //     if (iconColor === 'black') {
    //         setIconColor('red');
    //     } else {
    //         setIconColor('black');
    //     }
    // };
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
                    <span><i className="bi bi-arrow-left-right m-lg-3"></i></span>
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