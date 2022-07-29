import logo from '../socialempires-logo.jpg'
import Gallery from './Gallery'
import Select from './Select'
import { useState } from 'react'

const imagePerPage = 30

const App = () => {
  const [civilization, setCivilization] = useState('atlantis')
  const [menuOpen, setMenuOpen] = useState(false)
  const [page, setPage] = useState(1)

  return (
    <div className="container" onClick={() => menuOpen && setMenuOpen(false)}>
    <header>
      <img src={logo} alt="Social Empires logo"/>
      <Select
        onClick={e => {
          setCivilization(e.target.dataset.category)
          setPage(1)
        }}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        selectedCategory={civilization}/>
    </header>
      <Gallery
        civilization={civilization}
        currentPage={page}
        imagePerPage={imagePerPage}
        handlePageChange={() => setPage(page + 1)}/>
    </div>
  )
}

export default App