import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories
export const selectCategories = createSelector(
  [selectCategoryReducer], //  what are the slices I want from redux
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = (state) => {
    console.log('selector fired')
    return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});}

