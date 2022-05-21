import React from 'react'
import { Divider } from '@mui/material';
import "./cart.css";

const Cart = () => {
  return ( 
    <>
    return 
    <div className='cart_section'>
        <div className="cart_container">
            <div className="left_cart">
                <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="cart_img"/>
                <div className="cart_btn">
                <button className='cart_btn1'>Add to Cart</button>
                <button className='cart_btn2'>Buy Now</button>
            </div>
            </div>
       
        <div className="right_cart">
          <h3>Electric Kettle</h3>
          <h4>Pigeon 1.5 Litres 1500 Watts Electric Kettle (Detachable Base, 12466, Silver)</h4>
          <Divider/>
          <p className="mrp">M.R.P. : ₹ 1195</p>
          <p>Deal of the Day: <span style={{color:"#B12704"}}>₹ 625.00</span></p>
          <p>You save: :<span style={{color:"#B12704"}}>₹ 570 (47%)</span></p>


          <div className="discount_box">
            <h5>Discount: <span style={{color:"#111"}}>Extra 10% Off</span></h5>
            <h4>Free Delivery: <span style={{color:"#111",fontWeight:600}}>Oct 8 -21</span>Details</h4>
            <p>Fastest Delivery: <span style={{color:"#111",fontWeight:600}}>Tomorrow 11AM</span></p>
          </div>
          <p className='description'>About the Item: <span style={{color:"#565959", fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>Max 3 differentiators Great Features - i)Automatic Cutoff ii) 360 Degree Swivel Base iii)Single Touch lid locking
Voltage: 230V; Wattage: 1500W. Heating Element:Yes
Warranty: 1 Year
i) Power - 1500 watts ii) Capacity - 1.5L iii) Material- Stainless Steel iv) Concealed Element.</span></p>
        </div>
        </div>
    </div>
     
    </>
  )
}

export default Cart
