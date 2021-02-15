import React from 'react';
import './App.scss';
// import chat engine
import { ChatEngine } from 'react-chat-engine';
// import components
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID = 'dc25e155-5307-49f9-9fd8-008c4126f136';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
     <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
     />
    </div>
  );
}

export default App;
