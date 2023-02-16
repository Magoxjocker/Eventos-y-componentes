import Login from "./components/Login";
import Alert from "./components/Alert";
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


const App = () => {
const [alerta, setAlerta] = useState({msg:'',color: ''})
  return (
    <div className="container">

      <Login setAlerta={setAlerta}/>
      <Alert alerta={alerta}/>

    </div>
  )
}

export default App;


