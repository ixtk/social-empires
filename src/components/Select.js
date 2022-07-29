import arrow from '../arrow.png'

const tags = [
  'atlantis', 'aztec', 'celestial', 'chinese',
  'egypt', 'elf', 'gladiator', 'halloween', 'home',
  'infernal', 'myth', 'mythological', 'necro',
  'orc', 'troll', 'viking'
]

const Select = ({onClick, selectedCategory, menuOpen, setMenuOpen}) => {
  const categoryOptions = tags.map(tag => {
    return (
      <li key={tag}>
        <button disabled={tag === selectedCategory} data-category={tag}>{tag}</button>
      </li>
    )
  })
  return (
    <div className="select-container">
      <button
        className="category-selected"
        onClick={() => setMenuOpen(!menuOpen)}
      >
      {selectedCategory}
      <img src={arrow} alt="" />
      </button>

      {
      menuOpen &&
      <ul onClick={(e) => {
        onClick(e)
        setMenuOpen(false)}}>
        {categoryOptions}
      </ul>
      }
    </div>
  )
}

export default Select