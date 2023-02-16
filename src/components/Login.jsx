
import { useState } from "react"

const Login = ({setAlerta}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const handleSubmit = (e)=>{
  e.preventDefault()
    if (email.trim() === 'jtapiad@lapintana.cl' && password.trim() === '123456789') {
      setAlerta({ msg: 'successful section start', color: 'success' })
    } else {
      setAlerta({ msg: 'failed section start', color: 'warning' })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Challenge - Events and Components</h1>
        <div className="mb-3">

          <label htmlFor="email" className="form-label ">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emai1"
            placeholder="Enteryouremail@Here.com"
            value={email}
            onChange={e => setEmail(e.target.value)} />

        </div>

        <div className="mb-3">

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="enterYourPassword"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-success" disabled={!email.trim() || !password.trim()}>Start section</button>
      </form>

    </div>
  )
}

export default Login