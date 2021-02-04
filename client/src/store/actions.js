// import axios from '../config/axios'
import axios from 'axios'
import { Swal, Toast } from '../config/swal'

export function GetAllMovies(payload) {
  return (dispatch) => {
    axios({
      url: `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({
        type: 'SET_ALL_MOVIES',
        payload: data
      })
    })
    .catch(console.log)
    .finally(() => {
      dispatch({
        type: 'SET_LOADING_DATA',
        payload: false
      })
    })
  }
}

export function detailMovie(id) {
  return (dispatch) => {
    axios({
      url: `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${id}`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({
        type: 'SET_DETAIL_MOVIES',
        payload: data
      })
    })
    .catch(err => {
      console.log(err.response);
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: err.response.data.message || 'Something Went Wrong'
      })
    })
    .finally(() => {
      dispatch({
        type: 'SET_LOADING_DATA',
        payload: false
      })
    })
  }
}

export function setFilterTgl(tglMovie) {
  return (dispatch) => {
    dispatch({
      type: 'SET_DETAIL_TGL_MOVIES',
      payload: { tglMovie }
    })
  }
}

export function setFilterTtl(ttlMovie) {
  return (dispatch) => {
    dispatch({
      type: 'SET_DETAIL_TTL_MOVIES',
      payload: { ttlMovie }
    })
  }
}

export function detailMovieNext(id) {
  return (dispatch) => {
    axios({
      url: `https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${id}`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({
        type: 'SET_DETAIL_MOVIES',
        payload: data
      })
    })
    .catch(err => {
      console.log(err.response);
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: err.response.data.message || 'Something Went Wrong'
      })
    })
    .finally(() => {
      dispatch({
        type: 'SET_LOADING_DATA',
        payload: false
      })
    })
  }
}