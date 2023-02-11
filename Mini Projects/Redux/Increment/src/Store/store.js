import { configureStore } from "@reduxjs/toolkit";
import red from "../reducers";

const store = configureStore({reducer:red})

export default store