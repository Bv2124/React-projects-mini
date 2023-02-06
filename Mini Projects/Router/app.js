import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Home from './Component/Home'
export default function App(){
  const [open,setOpen]=useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
  return(<>
  <div className={`side-nav ${open ? 'side-nav--active' : ''}`}>
  {/* The close button */}
  <button className='close-button' onClick={toggleMenu}>
    &times;
  </button>

  {/* Just some dummy links */}
  <a href='./Home'>Home</a>
  <a href='/'>About Us</a>
  <a href='/'>Contact Us</a>
  <a href='/'>Privacy Policy</a>
  <div className='divider'></div>
  <a href='/'>Dummy Link</a>
  <a href='https://www.kindacode.com/cat/react/'>React Tutorials</a>
  <a href='/'>Sign Up</a>
</div>

{/* Page content */}
<div className='container'>
  <h2>Welcome to KindaCode.com</h2>
  <p>Example: Closable, animated side drawer navigation</p>

  {/* The open button */}
  <button className='open-button' onClick={toggleMenu}>
    &#9776; open menu
  </button>
  <Router>
  <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home/>}></Route>
                 <Route exact path='/about' element={< About/> }></Route>
                 <Route exact path='/contact' element={< Contact/> }></Route>
          </Routes>
          </div>
  </Router>
  </div>
  </>)
}