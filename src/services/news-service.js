export default class NewsService {
  _apiKey = '4726237704484090ba75015f96772b13'
  url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          `apiKey=${this._apiKey}`;

  getLiveTop = async () =>{
    const res = await fetch(this.url);
    return res.json();
  }
}

const test = new NewsService();

test.getLiveTop().then(res => console.log(res.articles));