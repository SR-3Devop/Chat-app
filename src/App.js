import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LogInForm from './components/LogInForm'
const App = () => {
  if (!localStorage.getItem('username')) return <LogInForm />;
  return (
   <ChatEngine
   height="100vh"
   projectID="839a96ed-ca7a-4111-ad79-4e699f9a36ad"
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
   onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
   />
  )
}

export default App

