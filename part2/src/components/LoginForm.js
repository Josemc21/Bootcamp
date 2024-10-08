import Togglable from './Togglable'
import loginService from '../services/login'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function LoginForm ({ handleSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password
      })

      handleSubmit(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Togglable buttonLabel='Show login'>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </Togglable>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
