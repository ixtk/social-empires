import data from '../data'
import Image from './Image'

const Gallery = ({ civilization, currentPage, imagePerPage, handlePageChange }) => {
  if (civilization === '') return <div className="gallery"></div>

  let endRange = currentPage * imagePerPage
  const imageCount = data[civilization].length

  if (endRange > imageCount) {
    endRange = imageCount
  }

  const images = data[civilization].slice(0, endRange).map(title => {
    return (
      <Image
        src={`./civilizations/${civilization}/${title}.png`}
        name={title}
        key={title}
      />
    )
  })
  
  return (
    <>
      <div className="gallery">{images}</div>
      {endRange === imageCount || <button onClick={handlePageChange}>Load more</button>}
    </>
  )
}

export default Gallery