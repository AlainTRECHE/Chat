import { createStore } from 'redux';
import { CHANGE_INPUT_MESSAGE, ADD_MESSAGE } from './actions';
import { getHighestId } from './selectors';

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
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessageValue: action.newValue,
      };
      case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: getHighestId(state) + 1,
            content: state.inputMessageValue,
            author: "Bob",
          },
        ],
        inputMessageValue: "",
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
