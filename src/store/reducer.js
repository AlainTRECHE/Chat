import { 
  CHANGE_INPUT_MESSAGE,
  ADD_MESSAGE, 
  TOGGLE_SETTINGS,
  CHANGE_SETTINGS_FIELDS,
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCESS,
} from "./actions";

import { getHighestId } from "./selectors";

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
  inputMessageValue: "",
  name: null,
  settings: {
    areOpen: true,
    isLoading: false,
    emailValue: "bouclierman@herocorp.io",
    passwordValue: "jennifer",
  }
};

const reducer = (state = initialState, action) => {
  console.log("un tour dans le reducer");
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
            author: state.name,
          },
        ],
        inputMessageValue: "",
      };
      case TOGGLE_SETTINGS:
      return {
        ...state,
       settings: {
        ...state.settings,
        areOpen: !state.settings.areOpen,
       },
      };
      case CHANGE_SETTINGS_FIELDS:
        return {
          ...state,
          settings: {
            ...state.settings,
            [action.inputKey]: action.newValue,
          },
        };
      case SUBMIT_LOGIN:
        return {
          ...state,
          settings: {
            ...state.settings,
            isLoading: true,
          },
        };
      case SUBMIT_LOGIN_SUCCESS:
        return {
          ...state,
          name: action.name,
          settings: {
            ...state.settings,
            isLoading: false,
          }
        }
    default:
      return state;
  }
};

export default reducer;
