import * as React from "react";
import "./MainPage.css";
import { func } from "prop-types";
import { useState } from "react";

export default function MainPage() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?",
    },
    {
      user: "me",
      message: "blahh",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
  }

  return (
    <section className="chatbox">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div className="chat-message chatgpt">
          <div className="chat-message-center">
            <div className="avatar chatgpt"></div>
            <div className="message">AI</div>
          </div>
        </div>
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input-textarea"
            placeholder="Type your message here"
          ></input>
        </form>
      </div>
    </section>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user == "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className="avatar"></div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};
