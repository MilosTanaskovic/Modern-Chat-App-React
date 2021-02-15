import React from 'react';
import './App.scss';
// import chat engine
import { ChatEngine } from 'react-chat-engine';
// import components
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
     <ChatEngine 
      height="100vh"
      projectID="dc25e155-5307-49f9-9fd8-008c4126f136"
      userName="milos"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
     />
    </div>
  );
}

export default App;
