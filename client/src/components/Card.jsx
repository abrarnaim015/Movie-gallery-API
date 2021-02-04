import React from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { detailMovie } from '../store/actions'
import { Swal } from '../config/swal'
// import Button from '@material-ui/core/Button'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function Cards({ allMovies, scrollPosition }) {
  const dispatch = useDispatch()
  const history = useHistory()

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

  return (
    <>
        {allMovies.map(( Movie => (
          <div key={Movie.id} className="col-3 my-4 d-flex justify-content-center w3-animate-opacity">
            <div className="card text-center shadowCard">
              <div className="image-container">
                <LazyLoadImage onClick={() => handleDetailImg(Movie.image, Movie.title)} alt={Movie.title} width="260px" src={Movie.image} scrollPosition={scrollPosition} style={{ cursor: 'pointer' }} />
              </div>
              <div className="card-body">
                <h4 className="card-title titleCard">{Movie.title}</h4>
                  <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <p className="m-0"><i class="fas fa-medal mx-2"></i>{Movie.like}</p>
                    <p className="m-0"><i class="far fa-calendar-alt mx-2"></i>{Movie.showTime.slice(0,10)}</p>
                  </div>
                <button onClick={() => handleGetTitle(Movie.id)} style={{ borderRadius: '20px'}} className="btn btn-outline-success form-control mt-2">Detail</button>
              </div>
            </div>
          </div>
        )))}
    </>
  )
}