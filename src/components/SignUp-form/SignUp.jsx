
import {useState, useContext} from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/FormInput'
import './sign-up-form.styles.scss'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
import Button from '../buttons/button'

function SignUp() {
const [formFields, setFormFields] = useState(defaultFormFields)
const {displayName, email, password, confirmPassword} = formFields


function resetFormField() {
    setFormFields(defaultFormFields)
}
function handleChange(event) {
    // we get the attribute name from the elem that trigerred the event

    const {name, value} = event.target

    setFormFields({
        ...formFields,
        [name] : value

    })
}
async function handleSubmit(event) {
    
    event.preventDefault()
    //confirm pasword marched

    if(password !== confirmPassword) {
       alert('password do not match')
        return
    }
    // check if its authenticathed
    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
   
        resetFormField() 
    await createUserDocumentFromAuth(user, { displayName})

    setCurrentUser(user)
    console.log('sisis' + user)
} 
    catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('emails is already used bro')
        }
      console.log(error)
    }

    // save the user document

 
    console.log('submited')
}

    
    

return (
<div className='sign-up-container'>
    <h2>Don't have an account?</h2>
<span>Sign Up with your email and password</span>
    <form onSubmit={handleSubmit}>


<FormInput type="text" 
label='Display Name'
required onChange={handleChange} 
name="displayName"
value={displayName}
/>

<FormInput type="email" 
label='Email'
required onChange={handleChange} 
name="email"
value={email}
/>

<FormInput type="password" 
required onChange={handleChange} 
label='Password'
name="password"
value={password}/>

<FormInput type="password" 
label='Confirm Password'
required onChange={handleChange} 
name="confirmPassword"
value={confirmPassword}
/>

<Button type='submit'>Sign up</Button>
    </form>
    </div>
    )
}


export default SignUp