const Image = props => {
  return (
    <figure>
      <img src={props.src} height="200" width="200"/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default Image