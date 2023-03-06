import Footer from "../../components/footer"
import messageList from "../../mocks/messageList";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = () => {
  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} />
      ))}
      <Footer />
    </div>
  );
};

export default MessageList;