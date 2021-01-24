import axios from 'axios';
const token = `Bearer ${process.env.REACT_APP_API_TOKEN}`
const API_URL = 'https://api.brawlstars.com/v1/'
console.log(process.env.REACT_APP_API_TOKEN)
const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;

    axios.interceptors.response.use(
      response => response,
      error => Promise.reject({ ...error })
    );
    this.setHeaders();

  },
  setHeaders() {
		if (token) {
			axios.interceptors.request.use(
				config => {
					config.headers["Authorization"] = token;
					return config;
				},
				error => {
					return Promise.reject(error);
				}
			);
		} else {
			axios.defaults.headers["Authorization"] = "";
		}
	},

  query(resource, params = []) {
    let query_elements = '';
    if (params.length) {
      query_elements = params.join('&')
    }
    return axios.get(`${resource}/?${query_elements}`)
  },

  get(resource, slug = "") {
    console.log(resource  )
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
    return ApiService.get(`players/#${playerID}`)
  }
}

export default ApiService;