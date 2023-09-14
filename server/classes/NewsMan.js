import { default as axios } from 'axios';

class Newsman {
  constructor(_user, _apikey) {
    this.user = _user;
    this.apikey = _apikey;
  }

  callMethod(_endpoint, _method, _params = undefined) {
    let api_url =
      'https://ssl.newsman.app/api/1.2/rest/' +
      this.user +
      '/' +
      this.apikey +
      '/';

    if (_params === undefined)
      return axios.get(api_url + _endpoint + '.' + _method + '.json');
    else
      return axios.post(api_url + _endpoint + '.' + _method + '.json', _params);
  }
}

export const Client = Newsman;
