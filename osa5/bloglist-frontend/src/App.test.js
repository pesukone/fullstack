import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import LoginForm from './components/Login'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('shows only loginForm when user has not logged in', () => {
    app.update()
    const loginForm = app.find(LoginForm)
    expect(loginForm.length).toBe(1)

    const blogs = app.find(Blog)
    expect(blogs.length).toBe(0)
  })
})
