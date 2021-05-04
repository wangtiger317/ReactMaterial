import axios from "axios";

const BASE_URL = "https://localhost:5001/";

export const EndPoints = {
  PANNEAU: "Panneau",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    fetchByCategory: (category) => axios.get(url + category),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updateRecord) => axios.put(url + id, updateRecord),
    delete: (id) => axios.delete(url + id),
  };
};
