import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)) // задержка 2 сек

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
    if (!response.ok) throw new Error('Ошибка загрузки постов')
    return response.json()
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    selectedId: null,
    status: 'idle',     // idle / loading / succeeded / failed
    error: null
  },
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedId = action.payload
    },
    clearSelectedPost: (state) => {
      state.selectedId = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setSelectedPost, clearSelectedPost } = postsSlice.actions
export default postsSlice.reducer