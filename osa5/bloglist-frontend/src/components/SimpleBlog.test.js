import React from 'react'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
  let blogComponent
  const blog = {
    title: 'otsake',
    author: 'kirjoittaja',
    likes: 3
  }

  beforeEach(() => {
    const mockHandler = jest.fn()

    blogComponent = shallow(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )
  })

  it('renders blog information correctly', () => {
    const infoDiv = blogComponent.find('.infoDiv')
    const likeDiv = blogComponent.find('.likeDiv')

    expect(infoDiv.text()).toContain(blog.title)
    expect(infoDiv.text()).toContain(blog.author)
    expect(likeDiv.text()).toContain(blog.likes)
  })
})
