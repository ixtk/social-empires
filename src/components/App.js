import Gallery from './Gallery'
import Form from './Form'
import Header from './Header'
import { useState } from 'react'

const App = () => {
  const [civilization, setCivilization] = useState('')

  return (
    <div className="container">
      <Header />
      <Form
        handleChange={e => setCivilization(e.target.value)}
        civilization={civilization}
      />
      <Gallery civilization={civilization} />
    </div>
  )
}

export default App