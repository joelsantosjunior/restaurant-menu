import { useState } from 'react'
import db from './assets/db.json'
import './App.css'
import Layout from './layout'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(db)

  return (
    <>
      <Layout>
        <h1>My shopping cart</h1>
        <h2>total: R$ {count * 200}</h2>
      </Layout>
    </>
  )
}

export default App
