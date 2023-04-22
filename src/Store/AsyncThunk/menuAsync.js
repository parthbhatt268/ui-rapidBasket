import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as types from "../Action/types";
import { apiCall } from "../../API/baseAPI";
import * as config from "../../config"


export const getFoodItemByCategory = createAsyncThunk(
    types.GET_FOODITEM_BY_CATEGORY,
    async (category,{ rejectWithValue }) => {
      try {
        const response = await apiCall(config.GET_FOODITEM_BY_CATEGORY + `?category=${category.category}`, "GET");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );