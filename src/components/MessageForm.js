import React, { useState } from 'react'
// import chat engine
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

// import styling
import "./MessageForm.scss";
/**
* @author Milos Tanaskovic
* @function MessageForm
**/

const MessageForm = (props) => {
 const { chatId, creds } = props;
 const [value, setValue] = useState("");

 // submit
 const handleSubmit = (e) => {
  e.preventDefault();

  const text = value.trim();

  if(text.length > 0){
   sendMessage(creds, chatId, { text });
  }
  setValue('');
 }
 // type message
 const handleChange = (e) => {
  setValue(e.target.value);

  isTyping(props, chatId);

 }

 const handleUpload = (e) => {
  sendMessage(creds, chatId, { files: e.target.files, text: '' });
 }
  return(
    <form action="" onSubmit={handleSubmit}>
     <input 
      className="message-inupt"
      placeholder="Send a message..."
      type="text"
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
     />
     <label htmlFor="upload-button">
      <span className="image-button">
       <PictureOutlined  className="picture-icon"/> 
      </span>
     </label>
     <input 
      type="file"
      multiple={false}
      id="upload-button"
      style={{ display: 'none'}}
      onChange={handleUpload.bind(this)}
     />
     <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
   )
  }


export default MessageForm