import axios from 'axios';
const API_URL = 'https://api.brawlstars.com/v1/';
const TOKEN = process.env.REACT_APP_BS_TOKEN;

const ApiService = {
  init() {
    console.log(axios, axios.defaults)
    axios.defaults.baseURL = API_URL;
    axios.defaults.headers["Accept"] = "application/json";
    axios.defaults.headers["Authorization"] = `Bearer ${TOKEN}`;
    axios.interceptors.response.use(
      response => response,
      error => Promise.reject({ ...error })
    );
    this.setHeaders();

  },
  setHeaders() {
    axios.interceptors.request.use(
      config => {
        config.headers["Accept"] = "application/json";
        config.headers["Authorization"] = `Bearer ${TOKEN}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

  },

  query(resource, params = []) {
    let query_elements = '';
    if (params.length) {
      query_elements = params.join('&')
    }
    return axios.get(`${resource}/?${query_elements}`)
  },

  get(resource, slug = "") {
    return axios.get(`${resource}${slug ? `?${slug}` : ''}`)
  },

  post(resource, params) {
    return axios.post(resource, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}/`, params);
  },

  put(resource, params, config = {}) {
    return axios.put(`${resource}`, params, config);
  },

  delete(resource) {
    return axios.delete(resource)
  },

  patch(resource, details) {
    return axios.patch(resource, details)
  }
};

export const BrawlStarsService = {
  getPlayerByID(playerID) {

    return ApiService.get(`players/#${playerID}`);
  }
}

export default ApiService;