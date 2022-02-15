import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes_module'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h3>Clone page</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

