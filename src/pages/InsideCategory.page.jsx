
import {CategoryContainer,CategoryTitle} from '../components/Styles/insideCategory.styles.js'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../context/categories.context'
import ProductCard from '../components/product-card/product-card'
function InsideCategory() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])
  
  useEffect(() => {
    setProducts(categoriesMap[category])
    }
  , [category, categoriesMap]);
  return (
    <>
    <CategoryTitle>{category}</CategoryTitle>
    <CategoryContainer>
        
        {products &&
            products.map(product => <ProductCard key={product.id} product={product}/>)
        }
    </CategoryContainer>
    </>
  )
}

export default InsideCategory