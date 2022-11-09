import {CategoryContainer,CategoryTitle} from '../components/Styles/insideCategory.styles.js'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../components/product-card/product-card'
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../store/categories/category.selector.js'
function InsideCategory() {
  const { category } = useParams()
  console.log('render/re-rendering category component')
  const  categoriesMap  = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
    console.log('effect running')
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