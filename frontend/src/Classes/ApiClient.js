import axios from 'axios';

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(url ,config = {}) {
    return this.request({
      ...config,
      method: 'get',
      url: this.baseUrl + url,
      
    });
  }

  post(url, data, config = {}) {
    return this.request({
      ...config,
      method: 'post',
      url: this.baseUrl + url,
      data,
    });
  }

  put(url, data, config = {}) {
    return this.request({
      ...config,
      method: 'put',
      url: this.baseUrl + url,
      data,
    });
  }

  delete(url, config = {}) {
    return this.request({
      ...config,
      method: 'delete',
      url: this.baseUrl + url,
    });
  }

  async request(config) {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default ApiClient;
