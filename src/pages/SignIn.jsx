import React from 'react'
import { signInWithGooglePopup,
   createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
const SignIn = () => {

const logGoogleUser = async () => {
  const {user} = await signInWithGooglePopup()
 const userDocRef = await createUserDocumentFromAuth(user)
}
  return (
    <>
    <div>Sign In page</div>
    <button onClick={logGoogleUser}>
      Sign in with google
    </button>
  </>
  )
}

export default SignIn