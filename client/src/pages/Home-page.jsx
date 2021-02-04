import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllMovies } from '../store/actions'
import { Loading, Card } from '../components'
import '../style/style.css'
import Tooltip from '@material-ui/core/Tooltip'
import { openNav, closeNav } from '../style/animations/Home-page'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
  const dispatch = useDispatch()
  const { allMovies, loading } = useSelector(state => state)
  const history = useHistory()

  useEffect(() => {
    dispatch(GetAllMovies())
  }, [dispatch])

  function handleChangePage(page) {
    history.push(`/${page}`)
  }

  if(loading) {
    return <Loading/>
  }

  return (
    <>
      <div className="navbarApp">
        <div className="fixed-top">
          <Tooltip title="NavBar" arrow>
            <button style={{ marginLeft: '20px'}} className="btn btn-light ml-3 mt-3 px-4" onClick={() => openNav()}>&#9776;</button>
          </Tooltip>
        </div>
        <div id="myNav" className="overlay">
          <a style={{ textDecoration: 'none' }} href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
          <div className="overlay-content">
            <p onClick={() => handleChangePage('')}>Home</p>
            <a href="https://www.linkedin.com/in/abrarnaim/" target="blank" >My Linkedin</a>
            <p className="mt-5">© Copyright Abrar Na'im 2021</p>
          </div>
        </div>
      </div>
      <div className="container w3-animate-opacity">
        <div>
          <div className="text-light text-center my-5">
            <h2 className="titleCard">All Movies for You</h2>
          </div>
        </div>
        <div className="d-flex">
          <div className="row">
            <Card allMovies={ allMovies } />
          </div>
        </div>
      </div>
    </>
  )
}