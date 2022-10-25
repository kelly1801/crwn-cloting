import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Shop from "./pages/Shop";
import Authentication from "./pages/Authentication";
import CheckoutPage from "./pages/CheckoutPage";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if (user){
        
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user))
    })
return unsubscribe  
}, [])
  return (
    <BrowserRouter>
<Nav/>
 <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="shop/*" element={ <Shop/>} />
    <Route path="auth" element={ <Authentication/>} />
    <Route path="checkout" element={ <CheckoutPage/>} />
    
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
