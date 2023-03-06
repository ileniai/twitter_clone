import "./index.css";

const MessageItem = ({ messageData }) => {
  const { photo, userName, body, email } = messageData;

  return (
    <div className="MessageItem">
      <img className="MessageItem__photo" src={photo} alt={userName} />
      <div className="MessageItem__content">
        <span>{userName}</span>
        <span> {email}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <span className="value_span">5</span>
          <img
            src="https://img.icons8.com/material-rounded/512/retweet.png"
            alt="retweet"
          />
          <span className="value_span">8</span>
          <img
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <span className="value_span">12</span>
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" 
          />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;