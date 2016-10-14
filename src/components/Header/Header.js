import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import ScienceBaseImage from '../assets/sb_icon.png'

export const Header = () => (
  <div>
    <div className="visible-md-block visible-lg-block">
      <div id="usgscolorband">
        <div id="usgsbanner">
          <div id="usgsidentifier">
            <a href="https://www.usgs.gov">
              <img src='https://www.sciencebase.gov/catalog/assets/usgs/images/header_graphic_usgsIdentifier_white-82583014ddc33a2f5b91c2d4755c3c07.jpg'></img>
            </a>
          </div>
        </div>
      </div>
      <div className="apptitle">

      <img
        alt='This is a sciencebase, because Redux!'
        className='sciencebaseicon'
        src={ScienceBaseImage} />
        <h2>
          Move Sciencebase Files from ESIP to S3
        </h2>
      </div>
    </div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
