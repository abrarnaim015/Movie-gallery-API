import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  allMovies: [],
  detailMovie: [],
  filterTgl: [],
  loading: true
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_ALL_MOVIES":
      return { ...state, allMovies: payload }
    case "SET_LOADING_DATA":
      return { ...state, loading: payload }
    case "SET_DETAIL_MOVIES":
      return { ...state, detailMovie: payload }
    case "SET_DETAIL_TGL_MOVIES":
      let newDataTgl = state.allMovies.filter(movie => movie.showTime.slice(0,10) === payload.tglMovie)
      return { ...state, filterTgl: newDataTgl }
    case "SET_DETAIL_TTL_MOVIES":
      let newDataTtl = state.allMovies.filter(movie => movie.title === payload.ttlMovie)
      return { ...state, filterTgl: newDataTtl }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk))
)

export default store