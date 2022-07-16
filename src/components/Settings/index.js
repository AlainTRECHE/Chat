import { useDispatch, useSelector } from "react-redux";
import { toggleSettings, changeSettingsFields } from "src/store/actions";
import { submitLogin } from "../../store/actions";
import "./settings.scss";

function Settings() {
  const { areOpen, emailValue, passwordValue } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <form 
      className="settings"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(submitLogin);
      }}
      >
      <h2 className="settings__title">Connexion</h2>
      <button
        type="button"
        className="settings__toggle"
        onClick={() => {
          dispatch(toggleSettings());
        }}
      >+</button>
      {
        areOpen && (
          <>
            <input
              type="text"
              className="settings__input"
              value={emailValue}
              onChange={(e) => dispatch(changeSettingsFields(e.target.value, "emailValue"))}
            />
            <input
              type="password"
              className="settings__input"
              value={passwordValue}
              onChange={(e) => dispatch(changeSettingsFields(e.target.value, "passwordValue"))}
            />
            <button type="submit"
                    className="settings__submit"
                    >Envoyer</button>
          </>
        )
      }
    </form>
  );
}

export default Settings;
