
import Parent from './component/Parent'
import Sample from './component/Sample'
import Button from './component/Button'
import Count from './State/Count'
import UseEffect from './State/UseEffect'
import Login from './State/Login'
function App() {

  return (
    <>
    <Login/>
     <h1>Welcome to React</h1>
     <UseEffect/>
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
