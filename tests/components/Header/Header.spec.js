import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Renders an awesome sciencebase image', () => {
    const sciencebase = _wrapper.find('img.sciencebaseicon')
    expect(sciencebase).to.exist
    expect(sciencebase.prop('alt')).to.match(/This is a sciencebase, because Redux!/)
  })

  it('Renders a welcome message', () => {
    const welcome = _wrapper.find('h2')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Move Sciencebase Files from ESIP to S3/)
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName='route--active' to='/'>
          Home
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='route--active' to='/counter'>
          Counter
        </Link>
      )).to.be.true
    })
  })
})
