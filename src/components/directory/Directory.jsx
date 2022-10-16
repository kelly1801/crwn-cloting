import React from 'react'
import { Categories } from '../categoriesData/Categories'
import DirectoryItem from '../directory-item/Directory-item';
import {CategoriesContainer} from "../Styles/categories.styles.js";

function Directory() {
  return (
    <CategoriesContainer>
    {Categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
</CategoriesContainer>
  )
}

export default Directory