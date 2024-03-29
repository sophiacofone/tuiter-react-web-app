import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: "Bobi",
        lastName: "Son",
        handle: "@bobison",
        profilePicture: "images/Killer-whale.jpeg",
        bannerPicture: "images/banner.jpeg",
        totalTuits: "100",
        bio: "I am a Cat!",
        location: "Boston, MA",
        dateOfBirth: "Jan 1, 2000",
        dateJoined: "Jan 1, 2020",
        followingCount: "100",
        followersCount: "100",
        website: "https://www.google.com",
    }
}

const profileSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const { updateUser } = profileSlice.actions;
export default profileSlice.reducer;