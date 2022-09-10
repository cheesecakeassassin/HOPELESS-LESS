import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Request from './pages/Request'
import About from './pages/About'
import SignIn from './components/SignIn'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'

function App() {

    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/Browse' element={<Browse/>} />
                    <Route exact path='/Request' element={<Request/>} />
                    <Route exact path='/About' element={<About/>} />
                    <Route exact path='/SignIn' element={<SignIn/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
