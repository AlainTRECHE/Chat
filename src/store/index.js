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
        // je deverse mon ancien état
        ...state,
        // et maintenant je m'occupe des messages
        messages: [
          // je recopie les anciens...
          ...state.messages,
          // et j'en ajoute un nouveau
          {
            // je récup le plus rand id, et j'ajoute 1
            id: getHighestId(state) + 1,
            // facile : le contenu vient du champ controlé
            content: state.inputMessageValue,
            // pour l'instant, le author est en dur
            author: "Bob",
          },
        ],
        // je remets la valeur de l'input a vide
        inputMessageValue: "",
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
