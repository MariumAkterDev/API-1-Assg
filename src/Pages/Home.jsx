import React, { useEffect, useState } from 'react'
import './Home.css'


const Home = () => {
  const [data, setData] = useState([])

  useEffect (()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(json => setData(json))
  },[])
      
  return (
    <>
      <div className="cardShorna">
        <div className="containe">
          <div className="main_Card ">
            {
              data.map((item)=>{
                return(
                  <div key={item.id} className="motherCard">
                    <h1>{item.category.name}</h1>
                    <div className="photos">
                      <img src={item.category.image} alt="id" />
                    </div>
                    <div className="infoOne">
                      <h2>{item.title}</h2>
                      {/* <h4>{item.price}</h4> */}
                    </div>
                    <div className="information">
                      <h2>Price: <span>{item.price}</span></h2>
                      {/* <h2>Email: <span>{item.category}</span></h2> */}
                      {/* <h2>Phone: <span className='w-[200px]'>{item.description}</span></h2> */}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home