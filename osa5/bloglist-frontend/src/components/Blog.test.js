import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe('<Blog />', () => {
  let blogComponent

  const blog = {
    title: 'otsake',
    author: 'tekijä',
    likes: 3,
    url: 'http.cat',
    id: '12345',
    user: {
      name: 'nimi',
      _id: '12345'
    }
  }

  beforeEach(() => {
    blogComponent = shallow(
      <Blog
        blog={blog}
        like={() => {}}
        delete={() => {}}
        user={{ id: '12345' }}
      />
    )
  })

  it('before clicking only name and author are displayed', () => {
    const visibleDiv = blogComponent.find('.visibleDiv')
    const hiddenDiv = blogComponent.find('.hiddenDiv')

    expect(visibleDiv.text()).toContain(blog.title)
    expect(visibleDiv.text()).toContain(blog.author)
    expect(hiddenDiv.getElement().props.style).toEqual({ display: 'none' })
  })

  it('after clicking name the details are displayed', () => {
    const visibleDiv = blogComponent.find('.visibleDiv')
    visibleDiv.simulate('click')

    const hiddenDiv = blogComponent.find('.hiddenDiv')

    expect(hiddenDiv.getElement().props.style).toEqual({ display: '' })

    expect(hiddenDiv.text()).toContain(blog.likes)
    expect(hiddenDiv.text()).toContain(blog.user.name)
  })
})
