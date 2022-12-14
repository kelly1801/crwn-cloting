import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { SetCategories } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[]
}
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};


export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as SetCategories
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
