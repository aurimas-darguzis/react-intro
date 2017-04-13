import { createStore, compose } from 'redux'
import rootRedcuer from './reducers'

const store = createStore(rootRedcuer, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() : (f) => f
))

export default store
