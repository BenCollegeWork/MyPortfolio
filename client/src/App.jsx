import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

{/* This is the main app component that contains the router for the entire application */}
const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  )
}

export default App;