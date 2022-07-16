import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight } from "react-feather";

import { changeInputMessage, addMessage } from 'src/store/actions';

import "./form.scss";

function Form() {
  const inputValue = useSelector((state) => state.inputMessageValue);
  const isLogged = useSelector((state) => state.name !== null);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      dispatch(addMessage());
    }
  };

  return (
    <form  onSubmit={handleSubmit}
           className="add"
    >
      <input
        className="add__input"
        ref={inputRef}
        required
        disabled={!isLogged}
        type="text"
        placeholder=" 🙂 Message"
        value={inputValue}
        onChange={(e) => dispatch(changeInputMessage(e.target.value))}
      />
      <button 
        className="add__submit"
        type="submit"
        disabled={!isLogged}
        >
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
