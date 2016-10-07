import React from 'react'
import ScienceBaseImage from '../assets/sb_icon.png'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Files Available to Move</h4>
    <div className='col-md-4'><img
      alt='This is a sciencebase, because Redux!'
      className='sciencebase'
      src={ScienceBaseImage} />
    Put this cool icon somewhere</div>
  </div>
)

export default HomeView
