import data from '../data'
import Image from './Image'

const Gallery = ({ civilization }) => {
  if (civilization === '----') return <div className="gallery"></div>
  
  const images = data[civilization].map(title => {
    return (
      <Image
        src={`./civilizations/${civilization}/${title}.png`}
        name={title}
        key={title}
      />
    )
  })

  return <div className="gallery">{images}</div>
}

export default Gallery