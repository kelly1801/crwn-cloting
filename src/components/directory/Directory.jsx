import React from 'react'
import { Categories } from '../categoriesData/Categories'
import CategoryItem from '../category-item/category-item'
import "../Styles/categories.styles.scss";

function Directory() {
  return (
    <div className="categories-container">
    {Categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  )
}

export default Directory