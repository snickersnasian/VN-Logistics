import React from 'react'
import { useRoutes } from './routes'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

function App() {

  const routes = useRoutes(true)

  return (
    <div>
      { routes }
    </div>
  );
}

export default App;
