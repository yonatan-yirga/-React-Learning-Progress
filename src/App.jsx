
import Parent from './component/Parent'
import Sample from './component/Sample'
import Button from './component/Button'
import Count from './State/Count'
function App() {

  return (
    <>
     <h1>Welcome to Rect</h1>
     <Count/>
     <Sample/>
     <Parent/>
     <Button text="Save" onClick={() => alert("Save clicked")} />
      <Button text="Delete" onClick={() => alert("Delete clicked")} />
      <Button text="Update" onClick={() => alert("Update clicked")} />
     
     
     
    </>
  )
}

export default App
