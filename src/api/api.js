import api from "../api/configData.json";
import axios from 'axios'

export const apiUrl = axios.create({
  baseURL: `${api.url}`,
});

export default apiUrl;
