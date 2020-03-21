import users from '../services/localStorage';

const initialState = {
  newsLoading: true,
  news: [],
  user: {
    username: undefined,
    password: undefined,
    authorized: false,
  },
  loginError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload,
        newsLoading: false,
        error: false
      };

    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        news: [],
        newsLoading: false,
        error: action.payload
      };

    case 'SET_USER_DATA':
      const { username, password } = action.payload;

      const idx = users.findIndex(
        item => item.username === username
      ); 
      
      if(idx < 0){
        return {
          ...state,
          loginError: true,
        }
      }

      if(idx >= 0 && users[idx].password === password){
        return {
          ...state,
          user: {
            ...users[idx],
            authorized: true
          },
          loginError: false,
        };
      }

      return {
        ...state
      }

      case 'USER_LOGOUT':
        return {
          ...state,
          user: {
            username: undefined,
            password: undefined,
            authorized: false
          }
        }

    default:
      return state;
  }
};

export default reducer;