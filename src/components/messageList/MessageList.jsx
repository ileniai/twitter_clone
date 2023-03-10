import {useState, useEffect} from "react";
import Footer from "../footer"
import Modal from "../modal";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = () => {

  const [messageList, setMessageList] = useState([]);

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
    .then ((res)=> res.json())
    .then(({posts})=> setMessageList(posts));
  }, []);

  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} key={message.id} setVisibleModal={setVisibleModal}/>
      ))}
      <Footer />
      {visibleModal && <Modal setVisibleModal = {setVisibleModal} />}

    </div>
  );
};

export default MessageList;

/*Al click del bottone che si trova in MessageItem si deve aprire la modale
quindi passo le props a messageItem tramite messageList e imposto i valori della modale*/