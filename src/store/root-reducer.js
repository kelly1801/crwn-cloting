import {combineReducers} from 'redux'
import { useReducer } from 'react'
import { userReducer } from './user/user.reducer'
import { categoriesReducer } from './categories/category.reducer'

export const rootReducer = combineReducers(
    {
user: userReducer,
categories: categoriesReducer
    }
)