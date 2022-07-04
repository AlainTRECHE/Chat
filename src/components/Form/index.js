import { useDispatch, useSelector } from 'react-redux';
import { changeInputMessage, addMessage } from 'src/store/actions';

import "./form.scss";

function Form() {
  const inputValue = useSelector((state) => state.inputMessageValue);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage());
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder=" 🙂 Message"
        value={inputValue}
        onChange={(event) => dispatch(changeInputMessage(event.target.value))}
      />
      <button type="submit">{'>'}</button>
    </form>
  );
}

export default Form;
