import { useEffect, useState } from 'react';
import './App.css';
import ChatHeader from './ChatHeader'
import ChatText from './ChatText'
import {db, auth} from './Firebase'
import Login from './Login';

function App() {
  // const ref = db.collection('users').doc('gauravkonde26@gmail.com').collection('users_connected').onSnapshot((onsnapshot) => console.log(onsnapshot.docs))
  // data.get().then((doc) =>{
  // })
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const signOut =() => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }
  return (
    <div className="App">
      {
        !user ?(
          <Login setUser={setUser}/>
        ):(
      <div>
      <ChatHeader user={user} signOut={signOut}/>
      <ChatText user={user} />
      </div>)
      }
    </div>
  );
}

export default App;
