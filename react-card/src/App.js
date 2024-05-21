import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'

import stylApp from './App.module.scss'

import About from './pages/About'
import Page404 from './pages/Page404';

function App() {
  return (
    <div className={ stylApp.card }>
      <header>
        <h2>子应用</h2>
      </header>
      <main>
        <Routes>
          <Route index element={ <About/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="*" element={ <Page404/> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
