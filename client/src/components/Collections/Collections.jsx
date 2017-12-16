import React, { Component } from 'react'

import './Collections.css'

class Collections extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collection: ''
    }
  }

  handleClick = (id) => {
    console.log('clicked!')
  }

  render () {
    return (
      <div className='collections-content'>
        <p className='collections-title'>Colecciones</p>
        <ul className='collections-ul'>
          <li onClick={ this.handleClick } className='collections-li'>
            <img src='https://i.imgur.com/dDxnu1B.jpg' className='collections-img' alt='default' />
            <div className='collections-img-hover'>
              <div className='collections-img-text'>
                <span>Hand Made Shoes & Bags AF</span><br />
                <br />
                Temporada 2017-2018
              </div>
            </div>
          </li>
          <li onClick={ this.handleClick } className='collections-li'>
            <img src='https://i.imgur.com/qRUsNGx.jpg' className='collections-img' alt='default' />
            <div className='collections-img-hover'>
              <div className='collections-img-text'>
                <span>Hand Made Shoes & Bags AF</span><br />
                <br />
                Novias 2017-2018
              </div>
            </div>
          </li>
          <li onClick={ this.handleClick } className='collections-li'>
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
}

export default Collections
