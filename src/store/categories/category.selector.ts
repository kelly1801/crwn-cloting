import {createSelector} from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";
const selectCategoryReducer = (state): CategoriesState => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer], //  what are the slices I want from redux
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = (state): CategoryMap => {

    return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);}

