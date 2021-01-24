import axios from 'axios';
const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ5YTE2N2E4LTM0MzAtNDhmZi1hZjEyLTMyYjI3NmUxZDkxMCIsImlhdCI6MTYxMTM2NDM4Nywic3ViIjoiZGV2ZWxvcGVyL2FkMjYyYmFkLTI1ZTQtNjg0MS01NWJiLTRjOTc5ZTczMDE0OCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMy4xMzQuMzkuMjIwIl0sInR5cGUiOiJjbGllbnQifV19.lfp1PqobDWhDer_zc76ptFUGcxFwesj7ETc9gEexjF52G5n1geyfNViTTV5MI19qMuzsKXdy28vgCJhBeoMhpQ`
const API_URL = 'https://api.brawlstars.com/v1/'
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
    return ApiService.get(`players/${playerID}`)
  }
}

export default ApiService;