import { createStore } from 'redux';

const initialState = {
  messages: [
    {
      id: 1,
      author: "Moultimoul",
      content: "Hey !",
    },
    {
      id: 2,
      author: "ChatMiaow",
      content: "ça va ?",
    },
  ],
  inputMessageValue: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_MESSAGE':
      return {
        ...state,
        inputMessageValue: action.newValue,
      };
    // si l'action n'est pas connue
    default:
      // je renvoie le state tel quel
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
