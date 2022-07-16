import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import woop from 'src/assets/woop.mp3';
import './messages.scss';

function Messages() {
  const messages = useSelector((state) => state.messages);

  const messagesRef = useRef(null);

  const audioRef = useRef(new Audio(woop));

  useEffect(() => {
    const messagesElement = messagesRef.current;
    messagesElement.scrollTop = messagesElement.scrollHeight;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }, [messages]);

  return (
    <div 
    className="messages"
    ref={messagesRef}
    autoPlay muted={true}
    >
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
