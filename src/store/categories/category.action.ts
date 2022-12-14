import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.util.js";
import { CATEGORIES_ACTION_TYPES,Category, CategoryItem } from "./category.types";

export type SetCategories = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES, Category[]>

export const setCategories = (categories: Category[]): SetCategories => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)
