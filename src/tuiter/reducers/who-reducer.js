import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../who-to-follow-list/data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray,
    reducers: {},
});

export default whoSlice.reducer;