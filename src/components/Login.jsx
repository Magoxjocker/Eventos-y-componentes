import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')

  return (
    <div>
      

      <form>
      <h1>Desafio - Eventos y Componentes</h1>
        <div className="mb-3">

          <label htmlFor="email" className="form-label">Email address</label>
          <input 
          type="email" 
          className="form-control" 
          id="emai1" 
          placeholder="ingresaAquiTu@Correo.com" 
          value={email} 
          onChange={e=>setEmail(e.target.value)}/>

        </div>

      </form>

    </div>
  )
}

export default Login