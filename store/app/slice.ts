import { createSlice } from '@reduxjs/toolkit'

import { initAppAsync } from './thunk'
import { APP_PREFIX, AppInitialState } from './types'

const initialState: AppInitialState = {
  loading: true,
  error: null,
}

const appSlice = createSlice({
  name: APP_PREFIX,
  initialState,

  reducers: {
    setAppLoading(state, { payload }: { payload: boolean }) {
      state.loading = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initAppAsync.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(initAppAsync.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(initAppAsync.rejected, (state, { payload }) => {
      state.loading = false

      if (payload) state.error = payload
    })
  },
})

export const { setAppLoading } = appSlice.actions

export default appSlice.reducer
