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

  const mockHandler = jest.fn()

  beforeEach(() => {
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

  it('increments likes correctly', () => {
    const button = blogComponent.find('button')

    button.at(0).simulate('click')
    button.at(0).simulate('click')

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
