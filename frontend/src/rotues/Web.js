import React from 'react';
import Home from '../views/Home'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

export default function Web() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />}/>
          </Routes>
      </Router>
  )
}
