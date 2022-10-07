import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <BrowserRouter>
<Nav/>
 <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="shop" element={ <Shop/>} />
    <Route path="sign-in" element={ <SignIn/>} />
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
