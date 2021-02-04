import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { detailMovieNext } from '../store/actions'
import { useHistory } from 'react-router-dom'
import { Loading } from '../components'
import Tooltip from '@material-ui/core/Tooltip'
import { openNav, closeNav } from '../style/animations/Home-page'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import Button from '@material-ui/core/Button'

export default function DetailPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { detailMovie, loading } = useSelector(state => state)

  function handleChangePage(page) {
    history.push(`/${page}`)
  }

  function handleGetTitleNext (id) {
    dispatch(detailMovieNext(id))
    history.push('/detail')
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
            <p onClick={() => handleChangePage('home')}>Movies</p>
            <p className="mt-5">© Copyright Abrar Na'im 2021</p>
          </div>
        </div>
      </div>
      <div className="container w3-animate-opacity">
        <div>
          <h2 className="titleCard text-light text-center mt-5">{detailMovie.title}</h2>
        </div>
        <div className="d-flex">
          <div className="col-8 d-flex  justify-content-cente">
            <LazyLoadImage alt={detailMovie.title} width="80%" src={detailMovie.image} className="mt-5" />
          </div>
          <div className="col-4">
            <h4 className="text-light text-center titleCard mt-5">Detail Of Movie</h4>
            <h4 className="text-light text-center titleCard">"{detailMovie.title}"</h4>
            <table className="text-light teble mt-5">
              <tr >
                <th>ID</th>
                <td className="text-center">{detailMovie.id}</td>
              </tr>
              <tr >
                <th>ShowTime</th>
                <td className="text-center">{detailMovie.showTime}</td>
              </tr>
              <tr >
                <th>title</th>
                <td className="text-center">{detailMovie.title}</td>
              </tr>
              <tr >
                <th>image</th>
                <td className="text-center">{JSON.stringify(detailMovie.image)}</td>
              </tr>
              <tr >
                <th>like</th>
                <td className="text-center">{detailMovie.like}</td>
              </tr>
            </table>
            <button onClick={() => handleGetTitleNext(Number(detailMovie.id)+1)} style={{ borderRadius: '20px'}} className="btn btn-outline-success form-control mt-5">Next</button>
            <button onClick={() => handleGetTitleNext(Number(detailMovie.id)-1)} style={{ borderRadius: '20px'}} className="btn btn-outline-success form-control mt-1">Back</button>
          </div>
        </div>
      </div>
    </>
  )
}