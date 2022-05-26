import React from 'react'
import { Outlet, Link, Redirect } from 'react-router-dom'
import Category from './Category'
import Country from './Country'
import Login from './Login'

const Home = ({ isLogged, onLogin }) => {
  return (
    <div>
      <h1 className="title">Where Do You want to Go?</h1>
      <Category isLogged={isLogged} onLogin={onLogin} />
      {!isLogged && (
        <h1 className="login-link">
          <Link to="/login">Please Login!</Link>
        </h1>
      )}
    </div>
  )
}

export default Home
