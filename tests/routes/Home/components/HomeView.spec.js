import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Welcome!/)
  })

  it('Renders an awesome sciencebase image', () => {
    const sciencebase = _component.find('img')
    expect(sciencebase).to.exist
    expect(sciencebase.attr('alt')).to.match(/This is a sciencebase, because Redux!/)
  })
})
