import React, { useState } from 'react'
import './ChatHeader.css'

function ChatHeader({user, signOut}) {

    return (
        <div className='chatHeader'>
            <img className='chatHeader__logo' onClick={signOut} src='https://th.bing.com/th/id/Re9014c30136a62ce6ec4edadacf91c94?rik=DOOuK3efUnDQtQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fFacebook_Messenger_logo.png'/>
            <h1 className='chatHeader__Title'>Messenger App</h1>
            <p className='chatHeader__User'>WELCOME {user.name.toUpperCase()}</p>
        </div>
    )
}

export default ChatHeader
