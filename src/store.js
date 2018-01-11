import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

//const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStore(reducers)
export default store