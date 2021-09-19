const Image = props => {
  return (
    <figure>
      <img src={props.src} alt={props.name}/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default Image