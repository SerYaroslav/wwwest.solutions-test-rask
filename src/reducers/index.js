import users from '../services/users';

const initialState = {
  loading: true,
  news: null,
  articles: [
    {
      source: {
        id: null,
        name: "Theinventory.com"
      },
      author: "Daryl Baxter on News, shared by Gabe Carey to Lifehacker",
      title: "10 Must-Have Accessories for Your New iPad",
      description:
        "Here’s some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro released this year.",
      url:
        "https://news.theinventory.com/10-must-have-accessories-for-your-new-ipad-1842398205",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cf9vr5d7latp2ijiwgzn.jpg",
      publishedAt: "2020-03-18T21:04:00Z",
      content:
        "After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars] After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars] After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars]After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars]After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars]"
    },
    {
      source: {
        id: null,
        name: "Theinventory.com"
      },
      author:
        "Daryl Baxter on The Inventory, shared by Gabe Carey to Lifehacker",
      title: "10 Must-Have Accessories for Your New iPad",
      description:
        "Here’s some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro released this year.",
      url:
        "https://theinventory.com/10-must-have-accessories-for-your-new-ipad-1842398205",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cf9vr5d7latp2ijiwgzn.jpg",
      publishedAt: "2020-03-18T21:04:00Z",
      content:
        "After todays announcements from Apple, weve been blessed with a new iPad Pro, and a keyboard that also comes with a trackpad.\r\nWith that, heres some of the best accessories you can buy for your iPad right now, from the regular model, right up to the 12.9 Pro … [+5281 chars]"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };

    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload,
        loading: false,
        error: false,
      };

    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        news: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;