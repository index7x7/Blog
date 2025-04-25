import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="title"> Biografia </h1>
      <div className="container">
        <div className="section">
          <img className="img" src="https://img.freepik.com/fotos-gratis/plano-de-fundo-texturizado-de-concreto-grunge-preto_53876-124541.jpg?semt=ais_hybrid&w=740" alt="" />
          <h4 className="subtitle">Gabriel S.</h4>
        </div>
        <p text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor blandit nibh non suscipit. Donec at mi at arcu molestie laoreet. Donec posuere nisi at augue mollis iaculis. Donec volutpat, mi eu faucibus efficitur, metus velit viverra orci, vel sagittis arcu eros quis mi. Aenean viverra, quam ut suscipit gravida, eros turpis aliquet risus, a mollis dui ante in ipsum. Donec nunc nisl, auctor in mollis dapibus, volutpat ac massa. Nullam nec arcu eu eros pellentesque scelerisque. In et faucibus enim. Nam a nisl felis. Integer et est diam.</p>
        <p>25/04/2025 às 12:10</p>
        <div>

        </div>

      </div>
    </>
  )
}

export default App
