import React from 'react'

import './Collections.css'

const Collections = () => {
  return (
    <div className='collections-content'>
      <p className='collections-title'>Colecciones</p>
      <ul className='collections-ul'>
        <li className='collections-li'>
          <img src='https://i.imgur.com/dDxnu1B.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              Temporada 2017-2018
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/qRUsNGx.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              Novias 2017-2018
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/DXlIPbd.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              Complementos 2017-2018
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/CUPNhUl.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span><br />
              <br />
              Avance 2018-2019
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Collections
