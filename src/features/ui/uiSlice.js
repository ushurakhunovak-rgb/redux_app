import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name:"ui",
    initialState:{
        theme:"light",
    },
    reducers:{
        toggleThame(state) {
          state.theme = state.theme === "light" ? "dark" : "light"; 
        }
    }
})



export const {toggleThame} = uiSlice.actions;
export default uiSlice.reducer;