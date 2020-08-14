import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=50";

export default {
  loadEmps: function () {
    return axios.get(BASEURL);
  }
};
