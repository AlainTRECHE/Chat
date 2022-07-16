import { response } from "express";

export const CHANGE_INPUT_MESSAGE = "CHANGE_INPUT_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const CHANGE_SETTINGS_FIELDS = "CHANGE_SETTINGS_FIELDS";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SUBMIT_LOGIN_SUCCESS = "SUBMIT_LOGIN_SUCCESS";

export const changeInputMessage = (newValue) => ({
  type: CHANGE_INPUT_MESSAGE,
  newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeSettingsFields = () => ({
  type: CHANGE_SETTINGS_FIELDS,
  newValue,
  inputKey,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitLoginSuccess = () => ({
  type: SUBMIT_LOGIN_SUCCESS,
  name: response.data.pseudo,
});
