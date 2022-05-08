const handleLoad = e => {
  e.target.style.animation = 'none'
}

const Image = props => {
  return (
    <figure>
      <img src={props.src} width="200" height="200" onLoad={handleLoad} onError={handleLoad}/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default Image