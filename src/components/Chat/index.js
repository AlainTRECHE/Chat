import Form from "src/components/Form";
import Message from "src/components/Message";
import Messages from "src/components/Messages";
import "./styles.scss";

// lorsque on tape dans le champ controlé
const handleSearchChange = (event) => {
  setSearchInput(event.target.value);
};

// soumission du formulaire
const handleSearchSubmit = (event) => {
  event.preventDefault();};

function Chat() {
  return (
    <div className="chat">
      <Message 
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}/>
      <Messages/>
      <Form />
    </div>
  );
}


export default Chat;
