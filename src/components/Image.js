import placeholderImage from '../placeholder.jpeg'

const handleLoad = e => {
  e.target.style.animation = 'none'
}

const handleError = e => {
  e.target.style.animation = 'none'
  e.target.src = placeholderImage
  e.target.alt = 'placeholder image'
}

const Image = props => {
  return (
    <figure>
      <img
        src={props.src}
        width="200" height="200"
        onLoad={handleLoad}
        onError={handleError}
        aria-labelledby={props.uniqueId}
        />
      <figcaption id={props.uniqueId}>{props.name}</figcaption>
    </figure>
  )
}

export default Image