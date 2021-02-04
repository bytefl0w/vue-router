import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/erikmortimer/real-world-vue3-tut",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page); // These are two query parameters we are sending to myjsonserver
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  }
};
