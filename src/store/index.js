
import musicMessageStore from './musicMessage/reducer'
import { createStore, combineReducers } from 'redux'

const Reducer = combineReducers({
  musicMessageStore
})

const store = createStore(Reducer)

store.subscribe((action) =>
  console.log(store.getState())
)


// 重定义dispatch
let next = store.dispatch

store.dispatch = (action) => {
  console.log(action)
  next(action)
}


export default store