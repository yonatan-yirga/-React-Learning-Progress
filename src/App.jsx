
import Parent from './component/Parent'
import Sample from './component/Sample'
import Button from './component/Button'
import Count from './State/Count'
import UseEffect from './State/UseEffect'
import Login from './State/Login'
import Usecallbackall from './State/Usecallbackall'
import Userprovider from "./State/Userprovider";
import Users from "./State/Users";
function App() {

  return (
    <>
     <Userprovider>

      <Users />

    </Userprovider>
     <Usecallbackall/>
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
