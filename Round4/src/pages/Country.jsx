import React from 'react'
import dummys from '../components/Dummys'
import { useParams, useNavigate, Outlet } from 'react-router-dom'

const dummyItems = dummys

const Country = () => {
  const navigate = useNavigate()
  const countryList = dummyItems.reduce((acc, cur) => {
    if (acc.findIndex(({ country }) => country === cur.country) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])

  // const { id } = useParams()

  return (
    <div>
      <h1>Country</h1>
      <div className="country-list">
        {countryList?.map((it, i) => (
          <div className="country-items" key={it.id}>
            <div onClick={() => navigate(`/country/${i}`)} className="country-name">
              {it.country}
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Country
