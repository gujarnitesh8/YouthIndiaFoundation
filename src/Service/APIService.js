// import AppData from '../../config';
import { AsyncStorage, Picker } from "react-native";
import { UserInfo, serverURL } from "./Constant";
const staticPath = serverURL;
global.cancel = "";
const APICaller = (endPoint, method, header, body) =>
  fetch(staticPath + endPoint, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "iOS"
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
// .then(text => console.log(text))

export const AddPost = (endPoint, method, header, body) =>
  fetch(staticPath + endPoint, {
    method: method,
    headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "iOS"
    },
    body:  body
  }).then(res => res.json());


  export const AddChallange = (endPoint, method, header, body) =>
    fetch(staticPath + endPoint, {
      method: method,
      headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "iOS"
      },
      body:  body
    }).then(res => res.json());
  

export default APICaller;


export const serUserInfo = data => {
  console.log(data.data.User, "set");
  AsyncStorage.setItem("loggedUser", JSON.stringify(data.data.User));
  AsyncStorage.setItem("userToken", data.userToken);
  global.token = data.userToken;
  UserInfo == data.data.User;
};

export const setAccessKey = key => {
  AsyncStorage.setItem("accessKey", key);
};
export const getAccessKey = key => {
  return AsyncStorage.getItem("accessKey");
};

export const getUserInfo = () => {
  return AsyncStorage.getItem("loggedUser");
};

export const getToken = () => {
  return AsyncStorage.getItem("userToken");
};
export const setToken = val => {
  AsyncStorage.setItem("userToken", val);
};

//Const Service
