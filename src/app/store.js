import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'
import postsReducer from '../features/posts/postsSlice'     

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    posts: postsReducer              
  }
})