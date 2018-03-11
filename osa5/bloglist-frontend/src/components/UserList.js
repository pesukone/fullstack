import React from 'react'
import { connect } from 'react-redux'

const UserList = props => (
  <div>
    <h3>users</h3>

    <table>
      <tbody>
        <tr>
          <td />
          <td><strong>blogs added</strong></td>
        </tr>
        {props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              {props
                .blogs
                .reduce((count, blog) =>
                  (blog.user.id === user.id ? count + 1 : count), 0)
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = state => ({
  users: state.users,
  blogs: state.blogs
})

export default connect(
  mapStateToProps,
  {}
)(UserList)
