import { useSelector } from 'react-redux';
import './messages.scss';

function Messages() {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      {
        messages.map((message) => (
          <div
            key={message.id}
            className="message"
          >
            <div className="message__author">{message.author}</div>
            <div className="message__content">{message.content}</div>
          </div>
        ))
      }
    </div>
  );
}

export default Messages;
