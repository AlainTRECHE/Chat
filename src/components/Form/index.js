import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeInputMessage, addMessage } from 'src/store/actions';
import { ChevronRight } from "react-feather";

import "./form.scss";

function Form() {
  const inputValue = useSelector((state) => state.inputMessageValue);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage());
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder=" 🙂 Message"
        value={inputValue}
        onChange={(event) => dispatch(changeInputMessage(event.target.value))}
      />
      <button type="submit">
       <ChevronRight 
        size={30}
        strokeWidth={3}
        className="submit"
         />
      </button>
    </form>
  );
}

export default Form;
