import axios from "axios";
import { submitLogin } from "../actions";

const authMiddleware = (store) => (next) => (action) => {
  console.log("une action passe dans authMiddleware: ", action);

  if (action.type === submitLogin) {
    console.log("action de login reçu dans le authMiddleware");

    const state = store.getState();

    const config = {
      method: "post",
      url: "http://localhost:3001/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: state.settings.emailValue,
        password: state.settings.passwordValue,
      },
    };
    axios(config)
      .then((response) => {
       console.log("reponse recue :", response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
