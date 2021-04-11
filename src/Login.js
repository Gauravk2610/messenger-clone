import React from 'react'
import { db, auth, provider} from './Firebase'
import './Login.css'

function Login({setUser}) {
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem("user", JSON.stringify(newUser))
            setUser(newUser)

        }).catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <div className='container'>
            <div className='card'>
                <img className='logo' src='https://th.bing.com/th/id/Re9014c30136a62ce6ec4edadacf91c94?rik=DOOuK3efUnDQtQ&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fFacebook_Messenger_logo.png' />
                <h2>Sign into Messenger</h2>
                <button type='submit' onClick={signIn} className='login'>Sign In</button>
            </div>
            
        </div>
    )
}

export default Login
