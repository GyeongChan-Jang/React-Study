import React from 'react'
import dummys from './Dummys'

const dummyItems = dummys

const Country = () => {
  const countryList = dummyItems.reduce((acc, cur) => {
    if (acc.findIndex(({ country }) => country === cur.country) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])

  return (
    <div>
      <h1>Country</h1>
      <div className="country-list">
        {countryList?.map((it) => (
          <div className="country-items" key={it.id}>
            <div>{it.country}</div>
          </div>
        ))}
        {/* {dummyItems.map((it) => (
        <div className="country-items" key={it.id}>
          <div>{it.country}</div>
        </div>
      ))} */}
      </div>
    </div>
  )
}

export default Country
