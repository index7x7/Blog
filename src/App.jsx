import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="body">
      <div>
        <h2 className="title"> Biografia </h2>
      </div>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      <Blog></Blog>
      
      </div>
    </>
  )
}

export default App
