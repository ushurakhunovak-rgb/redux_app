import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchInstruments, fetchInstrumentById} from "../../api/instrumentalApi";



//Загрузка списка
export const fetchInstrumentsAsync = createAsyncThunk(
    "instruments/fetchAll",
    async () => {
        return await fetchInstruments
    }
);

export const fetchInstrumentalById = createAsyncThunk(
    "instruments/fetchById",
    async (id) => {
        return await fetchInstrumentById(id);
    }
);

const instrumentsSlice = createSlice({
    name: "instruments",
    initialState: {
        items: [],
        selectedInstrument: null,
        status: "idle",
        error: null
    },

    reducers: {
        clearSelectedInstrument(state) {
            state.selectedInstrument = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInstruments.pending, (state) => {
                state.status = "loading";
        } )   
            .addCase(fetchInstruments.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            } )  
            .addCase(fetchInstruments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
    })

    //id get

 .addCase(fetchInstrumentalById.pending, (state) => {
                state.status = "loading";
        } )   
            .addCase(fetchInstrumentalById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedInstrument = action.payload;
            } )  
            .addCase(fetchInstrumentalById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
    })  

}
     
})

export const {clearSelectedInstrument} = instrumentsSlice.actions;
export default instrumentsSlice.reducer;




         