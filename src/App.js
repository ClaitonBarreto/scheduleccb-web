import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cult from './pages/Cult'
import Splash from './pages/Splash'

import api from '../src/@api/connection'

function App() {

  const [isLoad, setIsLoad] = useState([])

  useEffect(() => {
    async function connect() {

      const conn = await api.get('/')

      if(!conn.data.error) {
        setIsLoad(false)
      }
    }

    connect()
  })

  return (
    <>
      {isLoad ? 
        (<Splash />) 
        : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cult/:id/:cultDate" component={Cult}/>
            <Route>
              <h1>Erro. Rota não existente</h1>
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
