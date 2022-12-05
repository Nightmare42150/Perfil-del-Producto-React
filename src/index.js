import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PerfilDelProducto from './views/perfil-del-producto'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PerfilDelProducto} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
