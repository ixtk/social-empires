import Image from './Image'
import { useState, useEffect } from 'react'

const baseUrl = 'https://res.cloudinary.com'

const Gallery = ({ civilization, currentPage, imagePerPage, handlePageChange }) => {
  let endRange = currentPage * imagePerPage
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      let data = null;
      try {
        const url = `${baseUrl}/dc2c49xov/image/list/${civilization}.json`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Images not found at ${url}`)
        }
        data = await response.json()
      } catch (err) {
        console.error(err)
        return
      }
      const imageList = data.resources
      imageList.reverse()
      setImageData(imageList)
      }
    fetchImages()
  }, [civilization])

  const imageCount = imageData.length

  if (endRange > imageCount) {
    endRange = imageCount
  }
  
  const images = imageData.slice(0, endRange).map(image => {
    return (
      <Image
        src={`${baseUrl}/dc2c49xov/image/upload/${image.public_id}`}
        name={image.context.custom.caption}
        key={image.public_id}
        uniqueId={image.public_id}
      />
    )
  })
  
  return (
    <>
      <div className="gallery">{images}</div>
      {endRange === imageCount || <button className='load-btn' onClick={handlePageChange}>Load more</button>}
    </>
  )
}

export default Gallery