import React from 'react'

const LoginForm = ({ login, userField, passwordField, handler }) => (
  <div>
    <h2>Log in to application</h2>

    <form onSubmit={login}>
      <div>
        username:
        <input
          type="text"
          name="username"
          value={userField}
          onChange={handler}
        />
      </div>
      <div>
        password:
        <input
          type="password"
          name="password"
          value={passwordField}
          onChange={handler}
        />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
)

export default LoginForm
