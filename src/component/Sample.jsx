import Button from './Button'

function Sample() {
  return (
    <div>Sample
        <Button text="Save" onClick={() => alert("Save clicked")} />
    </div>
  )
}

export default Sample