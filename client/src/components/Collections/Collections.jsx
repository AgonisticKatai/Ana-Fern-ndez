import React from 'react'

import './Collections.css'

const Collections = () => {
  return (
    <div className='collections-content'>
      <p className='collections-title'>Colecciones</p>
      <ul className='collections-ul'>
        <li className='collections-li'>
          <img src='https://i.imgur.com/mtJwUwj.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span>
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/sjebGX0.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span>
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/I4F1xyL.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span>
            </div>
          </div>
        </li>
        <li className='collections-li'>
          <img src='https://i.imgur.com/Ok7jOPI.jpg' className='collections-img' alt='default' />
          <div className='collections-img-hover'>
            <div className='collections-img-text'>
              <span>Hand Made Shoes & Bags AF</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Collections
