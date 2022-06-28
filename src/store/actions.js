export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});
