import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Index from './Components/Pages/Index'
import PropertiesDetails from './Components/Pages/PropertiesDetails'

function App() {

  return (
    <>
      <Router basename='/Niraloy'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path="/PropertiesDetails/:id " element={<PropertiesDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
