import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './lib/Signin'
import Profile from './user/Profile'
//import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Project from './src/project'
import Services from './src/services'
import Layout from './components/Layout'
import PrivateRoute from './lib/PrivateRoute'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'


{/* This is the main router for the entire application. It contains the routes for all the pages in the application */}
const MainRouter = () => {
    return (
        <div>
            <Menu />
            <Layout />
            <Routes>
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
                <PrivateRoute exact path="/user/edit/:userId" element={<EditProfile />} />
                <Route exact path="/profile/:userId" element={<Profile />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default MainRouter