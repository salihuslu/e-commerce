import { configureStore } from '@reduxjs/toolkit'
import appReduser from '../redux/slices/appSlice'
import productReduser from '../redux/slices/productSlice'
import basketReducer from '../redux/slices/basketSlice'

export const store = configureStore({
    reducer: {
        app: appReduser,
        product: productReduser,
        basket: basketReducer
    },
})