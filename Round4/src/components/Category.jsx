import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
      <div className="wrapper">
        {/* Country -> title, text,  */}
        <div className="country">
          <Link to="country">
            <button>Country</button>
          </Link>
        </div>
        <div className="region">
          <Link to="region">
            <button>Region</button>
          </Link>
        </div>
        <div className="city">
          <Link to="city">
            <button>City</button>
          </Link>
        </div>
        <div className="sale">
          <Link to="sale">
            <button>Sale</button>
          </Link>
        </div>
        <div className="distance">
          <Link to="distance">
            <button>Distance</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Category
