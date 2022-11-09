import CategoryPreview from "../components/Category-preview/CategoryPreview.component";
import { selectCategoriesMap } from "../store/categories/category.selector";
import {useSelector} from 'react-redux'

function CategoriesPreview() {
  
const categoriesMap = useSelector(selectCategoriesMap)

return (
    <>
    {
      Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]

        return <CategoryPreview key={title} title={title} products={products}/>
      }
      )
    }
    
  
  </>
  );
}

export default CategoriesPreview;
