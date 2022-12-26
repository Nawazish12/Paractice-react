// store of application
import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./pages/features/TestSlice";

export default configureStore({
  reducer: {
    dashborad: TestSlice,
  },
});
