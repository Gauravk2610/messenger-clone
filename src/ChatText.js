import React, { useEffect, useState } from 'react'
import {db} from './Firebase'
import './ChatText.css'
import firebase from 'firebase'
import Slide from '@material-ui/core/Slide';

function ChatText({user}) {

    // const [user, setUser] = useState("Gaurav")
    const [input, setInput] = useState("")
    const [Messages, setMessages] = useState([])

    useEffect(() => {
        const  loadMessages  = db.collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot( snapshot => {
            setMessages(
                snapshot.docs.map(( doc ) => ({
                    id: doc.id,
                    name:doc.data().name,
                    message:doc.data().message
                }))
            )
        })
        return () => {
            loadMessages()
        }
    }, [])

    const addMessage = e => {
        e.preventDefault();
        if (input !== "") {
            db.collection('messages').add({
                name:user.name,
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput("")
        }
    }

    return (
        <div className='ChatText'>
            <div className="ChatText__User">
                {
                    Messages.map(( message ) => {
                        return (
                        message.name !== user.name ?
                        (<div key={message.id} className='ChatText__message'>
                            <p className='ChatText__username'>
                                {message.name}
                            </p>
                            <Slide
                            direction="right" in={true} mountOnEnter unmountOnExit
                            >
                            <span className='ChatText_userMessage'>
                                {message.message}
                            </span>
                            </Slide>                      
                        </div>)
                        :(

                        <div key={message.id} className='ChatText__message'>
                            <p className='ChatText__usernamemain'>
                                {message.name}
                            </p>

                            <span className='ChatText_userMessagemain'>
                                {message.message}
                            </span>

                        
                        </div>
                        )

                    )
                })
                }
            </div>
            <div>
            <form className="chatText__input" action="">
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatText__inputField" 
                type="text" placeholder="Type a message..."/>
                <img
                className="send__logo"
                onClick={addMessage}                
                src="https://th.bing.com/th/id/Re9014c30136a62ce6ec4edadacf91c94?rik=DOOuK3efUnDQtQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fFacebook_Messenger_logo.png" 
                alt="tinder logo"/>
                <button onClick={addMessage} type='hidden' className="chatText__inputButton"/>
            </form>
            </div>
        </div>
    )
}

export default ChatText
