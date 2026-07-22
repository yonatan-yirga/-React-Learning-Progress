import './App.css'
import Parent from './component/Parent'
import Sample from './component/Sample'
import Button from './component/Button'
import Count from './State/Count'
import Usecallbackall from './State/Usecallbackall'
import Userprovider from "./State/Userprovider";
import Users from "./State/Users";
import Poster from './State/Poster'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './component/Loader'
const Home = lazy(() => import('../Lazyloading/Home'));
const Profile = lazy(() => import('../Lazyloading/Profile'));
import Portalsshow from './Portals/Portalsshow'
import ProtectedRoute from './authentication/ProtectedRoute';
import Dashboard from './authentication/Dashboard';
import LoginPage  from './authentication/LoginPage'
function App() {
  return (
    <div className="app-container">

<ProtectedRoute>


<Dashboard/>


</ProtectedRoute>









      <Portalsshow/>
      <Profile/>
      <Router>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          } />
          <Route path="/profile" element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          } />
        </Routes>
      </Router>
      
      <div className="app-header">
        <Poster />
        <h1>Welcome to React</h1>
      </div>

      <div className="app-sections">
        
        <div className="section-wrapper">
          <h2 className="section-title">Users Directory</h2>
          <Userprovider>
            <Users />
          </Userprovider>
        </div>

        <div className="section-wrapper">
          <h2 className="section-title">Shopping Cart</h2>
          <Usecallbackall/>
        </div>

        <div className="section-wrapper">
          <h2 className="section-title">Counter</h2>
          <Count/>
        </div>

        <div className="section-wrapper">
          <h2 className="section-title">Products</h2>
          <Parent/>
        </div>

        <div className="section-wrapper">
          <h2 className="section-title">Sample Component</h2>
          <Sample/>
        </div>

        <div className="section-wrapper">
          <h2 className="section-title">Actions</h2>
          <Button text="Save" onClick={() => alert("Save clicked")} />
          <Button text="Delete" onClick={() => alert("Delete clicked")} />
          <Button text="Update" onClick={() => alert("Update clicked")} />
        </div>
      </div>
    </div>
  )
}

export default App
