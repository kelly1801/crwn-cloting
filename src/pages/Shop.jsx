import { Route, Routes} from "react-router-dom";
import CategoriesPreview from './CategoriesPreview'
import InsideCategory from "./InsideCategory.page";
function Shop() {
  return (
  
  <Routes>
    <Route index  element={<CategoriesPreview/>}/>
<Route path=":category" element={<InsideCategory/>}/>
   </Routes>
 
  );
}

export default Shop;
