import { createStore} from "redux";
import Reducer from './Reducer'
// import logger from 'redux-logger'

// , applyMiddleware(logger)

const Store = createStore(Reducer)

export default Store