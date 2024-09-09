import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import menwomen from '../Assets/menwomen.png'


const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers</h1>
            <p>JUST FOR YOU</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt='' />

        </div>
        <div className="new">
          <img src={menwomen} alt='' />
        </div>


    </div>
  )
}

export default Offers