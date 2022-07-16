import { useDispatch, useSelector } from "react-redux";
import { toggleSettings, changeSettingsFields } from "src/store/actions";
import "./settings.scss";

function Settings() {
  const { areOpen, emailValue, passwordValue } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <form className="settings">
      <h2 className="settings__title">Connexion</h2>
      <button
        type="button"
        className="settings__toggle"
        onClick={() => {
          dispatch(toggleSettings());
        }}
      >
        +
      </button>
      {
        areOpen && (
          <>
            <input
              type="text"
              className="settings__input"
              value={emailValue}
              onChange={(event) => dispatch(changeSettingsFields(event.target.value, "emailValue"))}
            />
            <input
              type="password"
              className="settings__input"
              value={passwordValue}
              onChange={(event) => dispatch(changeSettingsFields(event.target.value, "passwordValue"))}
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
