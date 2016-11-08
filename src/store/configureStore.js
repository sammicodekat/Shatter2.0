import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

// import { loadState, saveState } from './localStorage'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // composeWithDevtools(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    // )
  )
}
