export const CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS"

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
})
