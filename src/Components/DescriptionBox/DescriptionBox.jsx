import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionboxnavigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (575)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce or "electronic commerce" is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods, digital goods, and services electronically.   
            </p>
            <p>
            Buying clothes online should be meaningful and enjoyable, just like the experience a customer gets in a brick-and-mortar store. Besides meeting standard quality requirements for visuals, you should create the best possible presentation of apparel items for customers to feel confident about their choice. 
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox