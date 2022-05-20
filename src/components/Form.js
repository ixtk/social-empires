const tags = [
  'atlantis', 'aztec', 'celestial', 'chinese',
  'egypt', 'elf', 'gladiator', 'halloween', 'home',
  'infernal', 'myth', 'mythological', 'necro',
  'orc', 'troll', 'viking'
]

const Form = ({ handleChange, civilization }) => {
  const civilizationOptions = tags.map(civilization => {
    return <option value={civilization} key={civilization}>{civilization}</option>
  })

  return (
    <form>
      <select value={civilization} onChange={handleChange}>
        {civilizationOptions}
      </select>
    </form>
  )
}

export default Form