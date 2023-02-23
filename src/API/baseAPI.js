import axios from "axios";

//let Base_url = "https://collegegram-backend.herokuapp.com/api/v1";
let Base_url = "http://localhost:8000/api/v1";

let headers = {
  "content-type": "application/json; charset=utf-8",
};

export const apiCall = async (url, method, payload) => {
  let args = {
    apiUrl: Base_url + url,
    headers: headers,
  };
  if (method) {
    args.method = method;
  }
  if (payload) {
    args.payload = payload;
  }
  
    const res = await axios({
      method: args.method,
      url: args.apiUrl,
      data: args.payload,
      headers: headers,
    });
    return res
};
