
import musicMessageStore from './musicMessage/reducer'
import { createStore, combineReducers } from 'redux'

const Reducer = combineReducers({
  musicMessageStore
})

const store = createStore(Reducer)

store.subscribe(() =>
  console.log(store.getState())
);


export default store