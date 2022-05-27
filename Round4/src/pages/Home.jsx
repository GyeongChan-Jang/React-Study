import React from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category'

const Home = ({ isLogged, onLogin }) => {
  return (
    <div>
      <h1 className="title">Where Do You want to Go?</h1>
      <Category isLogged={isLogged} onLogin={onLogin} />
      {!isLogged && (
        <h1 className="login-link">
          <NavLink to="/login" activeclassname="active">
            Please Login!
          </NavLink>
        </h1>
      )}
    </div>
  )
}

export default Home
