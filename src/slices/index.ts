import { combineReducers } from 'redux'
import tagsReducer from './tags'

const rootReducer = combineReducers({
  tags: tagsReducer,
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer