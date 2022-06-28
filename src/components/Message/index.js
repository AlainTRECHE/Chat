import PropTypes from 'prop-types';
import "./message.scss";

function Message ({onChange, onSubmit}) {
  return(
    <><input
      className="input"
      type="text"
      placeholder="Saisissez votre message..."
      onChange={onChange} />
      <button className="input-button"
      onSubmit={onSubmit}
      /></>
  )
};

Message.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Message;
