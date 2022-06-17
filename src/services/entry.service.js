import axios from "axios";

const API_URL = "http://localhost:3000/api/entry/";

const postEntry = (date, location, details, user) => {
  return axios.post(API_URL + "postEntry", {
    date,
    location,
    details,
    user
  });
};

const EntryService = {
  postEntry
}

export default EntryService;