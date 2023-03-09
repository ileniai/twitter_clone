import { useState, useEffect } from "react";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;

  const [userData, setUserData] = useState({});
//Ho creato uno stato che incrementa il valore dei like
  const [isALike, setIsALike] = useState(0);
//Ho creato uno stato che incrementa il valore dei messaggi
  const [isAMessage, setIsAMessage] = useState(0)


  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
//Ho creato la funzione che incrementa il valore dei like
  const mustLike = ()=>setIsALike((prev)=> prev + 1);
//Ho creato la funzione che incrementa il valore dei messaggi
  const mustMessage = ()=>setIsAMessage((prev)=> prev + 1);

  return (
    <div className="MessageItem">
      <img className="MessageItem__photo" 
      src={userData.image} alt={userData.username} />
      <div className="MessageItem__content">
        <span>{userData.username}</span>
        <span> {userData.email}</span>
        <p className="text_card">{body}</p>
        <div className="MessageItem__content--icons">
          <img onClick={mustMessage}
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <span className="value_span">{isAMessage}</span>
          <img
            src="https://img.icons8.com/material-rounded/512/retweet.png"
            alt="retweet"
          />
          <span className="value_span"></span>
          <img 
            onClick={mustLike}
            src="https://img.icons8.com/ios-glyphs/256/hearts.png" alt="heart"
             />
          <span className="value_span">{isALike}</span>
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" 
          />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;