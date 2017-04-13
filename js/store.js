import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootRedcuer from './reducers'

const store = createStore(rootRedcuer, compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() : (f) => f
))

export default store
