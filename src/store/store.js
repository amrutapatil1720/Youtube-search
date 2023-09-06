import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../reducers/searchReducer';

// create store is deprecated instead we use configure store from @reduxjs/toolkit plugin

const store = configureStore({
    reducer:{
        searchResult : searchReducer
    },
})

export default store;