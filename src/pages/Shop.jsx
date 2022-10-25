import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import CategoriesPreview from "./CategoriesPreview";
import InsideCategory from "./InsideCategory.page";
import { setCategoriesMap } from "../store/categories/category.action";
import { useDispatch } from "react-redux";
function Shop() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<InsideCategory />} />
    </Routes>
  );
}

export default Shop;
