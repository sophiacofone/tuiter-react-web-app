import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

function ProfileScreen() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);

    return (
        <div>
            <div className="row">
                <div>
                    <span><h2 className="mb-0">{profile.firstName} {profile.lastName}</h2></span>
                    <span className="text-muted">{profile.totalTuits} Tuits</span>
                </div>
            </div>
            <div className="row">
                <div>
                    <img src={profile.bannerPicture} alt="banner" className="position-relative img-fluid"/>
                    <img src={profile.profilePicture} alt="profile" className="position-relative rounded-circle img-custom-profile"/>
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-primary rounded-pill float-end mt-2">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <span><h5 className="mb-0">{profile.firstName} {profile.lastName}</h5></span>
                <span className="text-muted">{profile.handle}</span>
            </div>
            <div className="row">
                <span className="mt-2">{profile.bio}</span>
            </div>
            <div className="row">
                <div className="col-4 mt-2 text-muted"><i className="bi bi-geo-alt-fill"></i> {profile.location}</div>
                <div className="col-4 mt-2 text-muted"><i className="bi bi-balloon"></i> Born {profile.dateOfBirth}</div>
                <div className="col-4 mt-2 text-muted"><i className="bi bi-calendar3"></i> Joined {profile.dateJoined}</div>
            </div>
            <div className="row">
                <div className="col-6 mt-2"><i className="bi bi-people-fill"></i> {profile.followingCount}
                    <span className="text-muted"> Following</span>
                </div>
                <div className="col-6 mt-2"><i className="bi bi-people-fill"></i> {profile.followersCount}
                    <span className="text-muted"> Followers</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;