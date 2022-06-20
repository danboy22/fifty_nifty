import axios from "axios";
// const url = require("url")

const API_URL = "http://localhost:3000/api/entry/";

const postEntry = (date, location, details, user) => {
  return axios.post(API_URL + "postEntry", {
    date,
    location,
    details,
    user
  });
};

const getRecent = () => {
  return axios.get(API_URL + "getRecent")
}

const getMine = (user) => {
  // const queryParams = {userId: user}
  // const params = new url.URLSearchParams(queryParams);
  return axios.get(API_URL + `getMine/?user=${user}`)
}

const EntryService = {
  postEntry,
  getRecent,
  getMine
}

export default EntryService;