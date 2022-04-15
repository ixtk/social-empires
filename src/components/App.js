import Gallery from './Gallery'
import Form from './Form'
import Header from './Header'
import { useState } from 'react'

const imagePerPage = 30

const App = () => {
  const [civilization, setCivilization] = useState('atlantis')
  const [page, setPage] = useState(1)

  return (
    <div className="container">
      <Header />
      <Form
        handleChange={e => {
          setCivilization(e.target.value)
          setPage(1)
        }}
        civilization={civilization}/>
      <Gallery
        civilization={civilization}
        currentPage={page}
        imagePerPage={imagePerPage}
        handlePageChange={() => setPage(page + 1)}/>
    </div>
  )
}

export default App