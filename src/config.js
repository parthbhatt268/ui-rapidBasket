export const runLocally = () => window.location.hostname && /^localhost$/.test(window.location.hostname);
const HOST_URL = runLocally() ? "https://upset-shorts-newt.cyclic.app/api/v1/rapidBasket/" : ""

//Login
export const LOGIN = HOST_URL + "login";
//Register
export const SIGN_UP = HOST_URL + "signup";