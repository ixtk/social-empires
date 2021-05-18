import Gallery from './Gallery'
import Form from './Form'
import Header from './Header'
import { useState } from 'react'

const App = () => {
  const [civilization, setcivilization] = useState('----')

  const handleChange = e => {
    setcivilization(e.target.value)
  }

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Form
          handleChange={handleChange}
          civilization={civilization}
        />
        <hr />

        <Gallery civilization={civilization} />
      </div>
    </>
  )
}

export default App