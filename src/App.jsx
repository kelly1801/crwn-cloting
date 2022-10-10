import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import Authentication from "./pages/Authentication";
function App() {
  return (
    <BrowserRouter>
<Nav/>
 <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="shop" element={ <Shop/>} />
    <Route path="auth" element={ <Authentication/>} />
    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
