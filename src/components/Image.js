const handleLoad = e => {
  e.target.style.animation = 'none'
}

const Image = props => {
  return (
    <figure>
      <img src={props.src} height="200" width="200" onLoad={handleLoad}/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default Image