import React from 'react'

import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-content'>
      <p className='gallery-title'>Galería</p>
      <ul className='gallery-ul'>
        <li className='gallery-li'>
          <img src='https://i.imgur.com/ulzYik0.jpg' className='gallery-img' alt='default' />
          <div className='gallery-img-hover'>
            <div className='gallery-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              <span>Fotografía:</span> Jesús Polo<br />
              <span>Para:</span> INKU Atelier<br />
              <span>Modelo:</span> Raquel Ortega<br />
              Con uno, de mis diseños favoritos de novia, puro Rock & Roll<br />
              Novias diferentes y únicas!<br />
              <span>Ana García:</span> INKU Atelier, Consell de Cent n°97</div>
          </div>
        </li>
        <li className='gallery-li'>
          <img src='https://i.imgur.com/CnB7lSx.jpg' className='gallery-img' alt='default' />
          <div className='gallery-img-hover'>
            <div className='gallery-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              <span>Fotografía:</span> Jesús Polo<br />
              <span>Para:</span> INKU Atelier<br />
              <span>Modelo:</span> Raquel Ortega<br />
              Con uno, de mis diseños favoritos de novia, puro Rock & Roll<br />
              Novias diferentes y únicas!<br />
              <span>Ana García:</span> INKU Atelier, Consell de Cent n°97</div>
          </div>
        </li>
        <li className='gallery-li'>
          <img src='https://i.imgur.com/Mx0oNYm.jpg' className='gallery-img' alt='default' />
          <div className='gallery-img-hover'>
            <div className='gallery-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              <span>Fotografía:</span> Jesús Polo<br />
              <span>Para:</span> INKU Atelier<br />
              <span>Modelo:</span> Raquel Ortega<br />
              Con uno, de mis diseños favoritos de novia, puro Rock & Roll<br />
              Novias diferentes y únicas!<br />
              <span>Ana García:</span> INKU Atelier, Consell de Cent n°97</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Gallery
