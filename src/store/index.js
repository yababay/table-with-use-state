import { configureStore } from '@reduxjs/toolkit'

import personsReducer from './personsSlice'

export default configureStore({
  reducer: {
    persons: personsReducer
  }
})
