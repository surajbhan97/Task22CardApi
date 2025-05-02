import React from 'react'
import './assets/css/style.css'
import useFetch from './useFetch'

const App = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <> 
      <h1>Photos</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className='boxContent'>
        {data &&
          data.map((item) => (
            <div key={item.id} className='box'>
            <div className='img'>
              <img src={item.images[0]} alt={item.title} width="100" />
            </div>

              <p>{item.title}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default App
