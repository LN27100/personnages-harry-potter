import { useState } from 'react'
import './App.css'
import logoPersonnages from '../public/images/personnages.jpg'
import logoSortileges from '../public/images/sortileges.jpg'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={logoPersonnages} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={logoSortileges} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>L'univers d'Harry Potter</h1>
      <div className="card">
       <h2>Découvrez les personnages ou les sortilèges en cliquant sur les images correspondantes !</h2>
        
      </div>
      
    </>
  )
}

export default App
