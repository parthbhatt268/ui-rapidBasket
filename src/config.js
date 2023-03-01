export const runLocally = () => window.location.hostname && /^localhost$/.test(window.location.hostname);
const HOST_URL ="https://upset-shorts-newt.cyclic.app/api/v1/rapidBasket/"

//Login
export const LOGIN = HOST_URL + "login";
//Register
export const SIGN_UP = HOST_URL + "signup";
//Post Profile Data
export const PROFILE_POST = HOST_URL + "postprofile"
//Get Profile Data
export const PROFILE_GET = HOST_URL + "getprofile"
