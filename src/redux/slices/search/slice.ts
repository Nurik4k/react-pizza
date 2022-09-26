import { createSlice } from "@reduxjs/toolkit"
import { SearchSliceState } from "./types"




const initialState: SearchSliceState = {
   searchValue: "",
   value: "",
}

export const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      setSearchValue: (state, action) => {
         state.searchValue = action.payload
      },
      setValue: (state, action) => {
         state.value = action.payload
      }
   }
})


export const {setValue, setSearchValue} = searchSlice.actions
export default searchSlice.reducer