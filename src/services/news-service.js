export default class NewsService {
  countryCode = 'us'

  _apiKey = '4726237704484090ba75015f96772b13'
  _apiBase = 'http://newsapi.org/v2'
  _urlTopNews = `/top-headlines?country=${this.countryCode}&apiKey=${this._apiKey}`;


  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getLiveTop = async () =>{
    const res = await this.getResource(this._urlTopNews);
    return res;
  };
};
