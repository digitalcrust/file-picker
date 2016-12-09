import React, { PropTypes, Component } from 'react';
require('../styles/index.css')

export default class PaginationNavigator extends Component {
  toggleDescriptions() {
    const descriptions = document.querySelectorAll('.description')
    for (const description of descriptions) {
      description.style.display = description.style.display == 'block' ? 'none' : 'block';
    }
  }
  render () {

    return (<div className='navigation'>
              <a className='previous' href='#'>‹ previous</a>
              <a className='next' href='#'>next ›</a>
              <button className='toggle-descriptions' onClick={()=>{this.toggleDescriptions()}}>toggle descriptions</button>
            </div>)
  }
}
