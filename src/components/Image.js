const Image = props => {
  return (
    <div>
      <img className="gallery-img" src={props.src} alt={props.name} />
      <span className="gallery-img-title">{props.name}</span>
    </div>
  )
}

export default Image