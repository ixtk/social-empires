import data from '../data'

const Form = ({ handleChange, civilization }) => {
  const civilizationOptions = Object.keys(data).map(civilization => {
    return <option value={civilization} key={civilization}>{civilization}</option>
  })

  return (
    <form>
      <select value={civilization} onChange={handleChange}>
        <option value="----">----</option>
        {civilizationOptions}
      </select>
    </form>
  )
}

export default Form