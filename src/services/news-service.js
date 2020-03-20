export default class NewsService {
  _apiKey = '4726237704484090ba75015f96772b13'
  _apiBase = 'http://newsapi.org/v2'
  _countryCode = 'us'
  urlTopNews = `/top-headlines?country=${this._countryCode}&apiKey=${this._apiKey}`;

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getLiveTop = async () =>{
    const res = await this.getResource(this.urlTopNews);
    return res;
  }
}

/* const test = new NewsService();

test.getLiveTop().then(res => console.log(res.articles)); */