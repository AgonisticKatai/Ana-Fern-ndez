import React, { Component } from 'react'

import './Gallery.css'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gallery_item: ''
    }
  }

  handleClick = () => {
    console.log('clicked...')
  }

  render () {
    return (
      <div className='gallery-content'>
        <p className='gallery-title'>Galería</p>
        <ul className='gallery-ul'>
          <li onClick={this.handleClick} className='gallery-li'>
            <img src='https://i.imgur.com/raD6zme.jpg' className='gallery-img' alt='default' />
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
          <li onClick={this.handleClick} className='gallery-li'>
            <img src='https://i.imgur.com/QX6ANEn.jpg' className='gallery-img' alt='default' />
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
          <li onClick={this.handleClick} className='gallery-li'>
            <img src='https://i.imgur.com/jCRlKx0.jpg' className='gallery-img' alt='default' />
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
}

export default Gallery
