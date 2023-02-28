import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle" height={48} src={`./images/${who.avatarIcon}`}/>
                </div>
                <div className="col-6 p-0">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-3 p-0">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;