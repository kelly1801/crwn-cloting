import ProductCard from "../product-card/product-card"
import { Link } from "react-router-dom";
import {CategoryPreviewContainer, Preview} from './category-preview.styles.js'
function CategoryPreview({title, products}) {
  return (
    <CategoryPreviewContainer>
<Link to={title}>
<h2>
  <span className="title">{title.toUpperCase()}</span>
</h2>
</Link>
<Preview>
{ products.filter((_, index) => index < 4)
.map(product => <ProductCard key={product.id} product={product}/>)

}
</Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview