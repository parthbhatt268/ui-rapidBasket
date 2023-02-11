import * as constants from "./types"
import * as BaseURL from "../../Config/config"
import Axios from "axios";
//import { ActionTypes } from "@mui/base";

export const saveFruit = ()=>{
    return{
        type: "SAVE_FRUIT",
        payload: action.payload
    }
}

export const saveDish = (data) => {
    return{
        type: constants.SAVE_DISH,
        payload: data
    }
}

export const postLogin = (data) => {
    return async function (dispatch) {
        Axios.post(`${BaseURL.LOGIN}`, data)
        .then((response) => {
            console.log("then response", response)
        })
        .catch((error) => {
            console.log("Catch error", error)
        })
    }
}

export const postRegister = (data) => {
    return async function (dispatch) {
        Axios.post(`${BaseURL.SIGN_UP}`, data)
        .then((response) => {
            console.log("then response", response)
        })
        .catch((error) => {
            console.log("Catch error", error)
        })
    }
}