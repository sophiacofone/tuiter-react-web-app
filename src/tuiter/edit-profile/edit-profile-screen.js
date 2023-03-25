import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function EditProfileScreen() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState();

    return (
        <div>
            <div className="row">
                <h4>Edit profile</h4>
            </div>
            <div className="row">
                <div>
                    <img src={user.bannerPicture} alt="banner" className="position-relative img-fluid opacity"/>
                    <img src={user.profilePicture} alt="profile" className="position-relative rounded-circle img-custom-profile opacity"/>
                </div>
            </div>
            <div className="row">
                <label>First Name</label>
                <input
                    value={user.firstName}
                    onChange={(event) => setProfile({...user, firstName: event.target.value})}
                />
            </div>
            <div className="row">
                <label>Last Name</label>
                <input
                    value={user.lastName}
                    onChange={(event) => setProfile({...user, lastName: event.target.value})}
                />
            </div>
            <div className="row">
                <label>Bio</label>
                <input
                    value={user.bio}
                    onChange={(event) => setProfile({...user, bio: event.target.value})}
                />
            </div>
            <div className="row">
                <label>Location</label>
                <input
                    value={user.location}
                    onChange={(event) => setProfile({...user, location: event.target.value})}
                />
            </div>
            <div className="row">
                <label>Website</label>
                <input
                    value={user.website}
                    onChange={(event) => setProfile({...user, website: event.target.value})}
                />
            </div>
            <div className="row">
                <label>Birthdate</label>
                <input
                    value={user.dateOfBirth}
                    onChange={(event) => setProfile({...user, dateOfBirth: event.target.value})}
                />
            </div>
        </div>
    );
}

export default EditProfileScreen;