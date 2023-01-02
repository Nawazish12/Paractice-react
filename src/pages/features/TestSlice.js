import { createSlice } from "@reduxjs/toolkit";
import { Dummyjson } from "./DummyData";

const initailState = {
  data: Dummyjson,
  singleDetails: {
    name: "",
    population: "",
    language: "",
    capital: "",
  },
};

export const TestSlice = createSlice({
  name: "testSlice",
  initialState: initailState,
  reducers: {
    addList: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    delList: (state, action) => {
      state.data = state?.data?.filter((cur) => {
        return cur.id !== action.payload;
      });
    },

    singleListGet: (state, action) => {
      state.singleDetails = state?.data?.find((singleGet) => {
        return singleGet?.id === action.payload;
      });
    },
  },
});

export const { addList, delList, singleListGet } = TestSlice.actions;
export default TestSlice.reducer;
