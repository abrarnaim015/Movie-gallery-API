import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { Loading } from '../components'
import { Swal } from '../config/swal'
import { detailMovie } from '../store/actions'
import Tooltip from '@material-ui/core/Tooltip'
import { openNav, closeNav } from '../style/animations/Home-page'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function FilterTgl({scrollPosition}) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { filterTgl, loading } = useSelector(state => state)

  function handleChangePage(page) {
    history.push(`/${page}`)
  }

  if(loading) {
    return <Loading/>
  }

  function handleGetTitle(id) {
    dispatch(detailMovie(id))
    history.push('/detail')
  }

  function handleDetailImg(img, AltText) {
    Swal.fire({
      imageUrl: img,
      imageAlt: AltText,
      title: AltText
    })
  }
  if(filterTgl.length === 0) {
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
              <p onClick={() => handleChangePage('home')}>Movies</p>
              <p className="mt-5">© Copyright Abrar Na'im 2021</p>
            </div>
          </div>
        </div>
        <div className="container w3-animate-opacity">
          <div style={{ marginTop: '20%', cursor: 'pointer' }} onClick={() => history.push('/')}>
            <h1 pointer className="text-light text-center titleCard">Yah Movienya Ga ketemu <p>Sorry &#128531;</p></h1>
          </div>
        </div>
      </>
    )
  } else {
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
              <p onClick={() => handleChangePage('home')}>Movies</p>
              <p className="mt-5">© Copyright Abrar Na'im 2021</p>
            </div>
          </div>
        </div>
        <div className="container w3-animate-opacity bgMovie2">
          <div className="" style={{ marginTop: '100px'}}>
            <div className="mt-5 text-center text-light">
              <h1 className="titleCard">Your Movies Search</h1>
            </div>
            <div className="row justify-content-end">
              {filterTgl.map(( Movie => (
                  <div key={Movie.id} className="col-3 my-4 d-flex justify-content-center">
                    <div className="card text-center shadowCard">
                      <div className="image-container">
                        <LazyLoadImage onClick={() => handleDetailImg(Movie.image, Movie.title)} alt={Movie.title} width="260px" src={Movie.image} scrollPosition={scrollPosition} />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title titleCard">{Movie.title}</h4>
                          <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly' }}>
                            <p className="m-0"><i class="far fa-thumbs-up mx-2"></i>{Movie.like}</p>
                            <p className="m-0"><i class="far fa-calendar-alt mx-2"></i>{Movie.showTime.slice(0,10)}</p>
                          </div>
                        <Button onClick={() => handleGetTitle(Movie.id)} variant="outlined" className="my-1"><i class="fas fa-search my-1"></i></Button>
                      </div>
                    </div>
                  </div>
                )))}
            </div>
          </div>
        </div>
      </>
    )
  }
}