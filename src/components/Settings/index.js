import { useDispatch, useSelector } from 'react-redux';
import './settings.scss';

function Settings() {
  const areOpen = useSelector((state) => state.areSettingsOpen);
  const dispatch = useDispatch();

  return (
    <form className="settings">
      <button
        type="button"
        className="settings__toggle"
        onClick={() => {
          dispatch({ type: 'TOGGLE_SETTINGS' });
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
            />
            <input
              type="password"
              className="settings__input"
            />
            <button type="submit">Envoyer</button>
          </>
        )
      }
    </form>
  );
}

export default Settings;
