import React, { useState, useEffect } from 'react'
import { GetAllMovies } from '../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setFilterTgl, setFilterTtl } from '../store/actions'
import { Toast } from '../config/swal'

export default function LandingPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [tglMovie, setTglMovie] = useState(null)
  const [TtlMovie, setTtlMovie] = useState('')

  useEffect(() => {
    dispatch(GetAllMovies())
  }, [dispatch])

  function handleChangeTgl(e) {
    let value = e.target.value
    setTglMovie(value)
  }

  function handleChangeTtl(e) {
    let value = e.target.value
    setTtlMovie(value)
  }
  
  function handleSubmitTgl(e) {
    e.preventDefault()
    if(tglMovie === null) {
      Toast.fire({
        icon: 'error',
        title: 'Sorry...'
      })
    } else {
      dispatch(setFilterTgl(tglMovie))
      history.push('/filtertgl')
      Toast.fire({
        icon: 'success',
        title: 'successfully'
      })
    }
  }

  function handleSubmitTtl(e) {
    e.preventDefault()
    if(TtlMovie === '') {
      Toast.fire({
        icon: 'error',
        title: 'Sorry...'
      })
    } else {
      dispatch(setFilterTtl(TtlMovie))
      history.push('/filtertgl')
      Toast.fire({
        icon: 'success',
        title: 'successfully'
      })
    }
  }

  return (
    <>
      <div className="container text-light w3-animate-opacity">
        <div className="d-flex">
          <div className="col-8 d-flex align-items-center">
            <img style={{ width: "100%", marginTop: '15%' }} src={'./bgMovie1.png'}></img>
          </div>
          <div className="col-4">
            <div className="p-3 cardLanding">
              <h3 className="titleCard text-center ">Welcome To My Movie App</h3>
              <div className="mt-4 mb-2 border p-1" style={{ borderRadius: '10px' }}>
                <div className="my-2">
                  <small className="titleCard">Pick Date Movies</small>
                </div>
                <form onSubmit={(e) => handleSubmitTgl(e)} className="form">
                  <input value={tglMovie} onChange={(e) => handleChangeTgl(e)} className="form form-control" style={{borderRadius: '20px', borderColor: 'black', cursor: 'pointer' }} type="date"></input>
                  <div className="d-flex">
                    <button style={{ borderRadius: '20px' }} type="submit" className="btn btn-outline-dark form-control m-2"><i class="fas fa-check mx-2"></i>Submit</button>
                    <button onClick={() => setTglMovie(null)} style={{ borderRadius: '20px' }} type="reset" className="btn btn-outline-dark form-control m-2"><i class="fas fa-sync-alt mx-2"></i>Reset</button>
                  </div>
                </form>
              </div>
              <div className="mt-4 mb-2 border p-1" style={{ borderRadius: '10px' }}>
                <div className="my-2">
                  <small className="titleCard">Search Movies By Title</small>
                </div>
                <form onSubmit={(e) => handleSubmitTtl(e)} className="form">
                  <input value={tglMovie} onChange={(e) => handleChangeTtl(e)} className="form form-control" style={{borderRadius: '20px', borderColor: 'black', cursor: 'pointer' }} type="text" placeholder="ex: Handcrafted Metal Table"></input>
                  <div className="d-flex">
                    <button style={{ borderRadius: '20px' }} type="submit" className="btn btn-outline-dark form-control m-2"><i class="fas fa-check mx-2"></i>Submit</button>
                    <button onClick={() => setTtlMovie('')} style={{ borderRadius: '20px' }} type="reset" className="btn btn-outline-dark form-control m-2"><i class="fas fa-sync-alt mx-2"></i>Reset</button>
                  </div>
                </form>
              </div>
              <button onClick={() => history.push('/home')} style={{ borderRadius: '20px' }} type="reset" className="btn btn-outline-dark form-control">More Movies</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}