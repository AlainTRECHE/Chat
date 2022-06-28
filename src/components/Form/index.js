import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const inputValue = useSelector((state) => state.inputMessageValue);
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          dispatch({ type: 'CHANGE_INPUT_MESSAGE', newValue: event.target.value });
        }}
      />
      <button type="submit">{'>'}</button>
    </form>
  );
}

export default Form;
