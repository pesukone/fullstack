import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import LoginForm from './components/Login'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app

  describe('when user is not logged in', () => {
    beforeEach(() => {
      app = mount(<App />)
    })

    it('only login from is rendered', () => {
      app.update()
      const loginForm = app.find(LoginForm)
      expect(loginForm.length).toBe(1)

      const blogs = app.find(Blog)
      expect(blogs.length).toBe(0)
    })
  })

  describe('when user is logged in', () => {
    beforeEach(() => {
      const user = {
        username: 'asd',
        token: '123456789',
        name: 'asd asd'
      }

      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))

      app = mount(<App />)
    })

    it('all blogs are rendered', () => {
      app.update()

      const blogs = app.find(BlogList).find(Blog)
      expect(blogs.length).toBe(3)
    })
  })
})
