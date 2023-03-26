import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../reducers/profile-reducer";
import './index.css';

function EditProfileScreen() {
    const {user} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(user);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateUser(profile));
    };
    return (
        <div>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-1">
                        <Link to="/tuiter/profile">
                            <button className="btn btn-link"><i className="bi bi-x-lg"></i></button>
                        </Link>
                    </div>
                    <div className="col-9 ">
                        <h3>Edit profile</h3>
                    </div>
                    <div className="col-2">
                        <button
                        className="btn btn-primary rounded-pill float-end"
                        onClick={handleSaveButton}>Save
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <img src={profile.bannerPicture} alt="banner" className="position-relative img-fluid opacity"/>
                    <img src={profile.profilePicture} alt="profile" className="position-relative rounded-circle img-custom-profile opacity"/>
                </div>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="inputFirstName" className="text-muted custom-text-size-loc">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        placeholder="First name"
                        value={profile.firstName}
                        onChange={(event) => setProfile({...profile, firstName: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputLastName" className="text-muted custom-text-size-loc">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        placeholder="Last name"
                        value={profile.lastName}
                        onChange={(event) => setProfile({...profile, lastName: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputBio" className="text-muted custom-text-size-loc">Bio</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputBio"
                        placeholder="Bio"
                        value={profile.bio}
                        onChange={(event) => setProfile({...profile, bio: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputLocation" className="text-muted custom-text-size-loc">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLocation"
                        placeholder="Location"
                        value={profile.location}
                        onChange={(event) => setProfile({...profile, location: event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputWebsite" className="text-muted custom-text-size-loc">Website</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputWebsite"
                        placeholder="Website"
                        value={profile.website}
                        onChange={(event) => setProfile({...profile, website: event.target.value})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputDateOfBirth" className="text-muted custom-text-size-loc"> Birth date</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputDateOfBirth"
                        placeholder="Date of Birth"
                        value={profile.dateOfBirth}
                        onChange={(event) => setProfile({...profile, dateOfBirth: event.target.value})}
                    />
                </div>
            </form>
            <div className="row mb-3">
                <div className="col-11">
                    Switch to professional
                </div>
                <div className="col-1">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    );
}

export default EditProfileScreen;