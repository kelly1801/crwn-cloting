import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import Authentication from "./pages/Authentication";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <BrowserRouter>
<Nav/>
 <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="shop" element={ <Shop/>} />
    <Route path="auth" element={ <Authentication/>} />
    <Route path="checkout" element={ <CheckoutPage/>} />
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
