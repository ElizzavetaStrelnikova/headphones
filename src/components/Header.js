import React, { Component } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
        <header>
            <div>
              <Link to="/" id="logo" href="#headphones"><span className='logo'>QPICK</span></Link>
            </div>
            <div className='group_26'>
            <div>      
                <FaRegHeart className="svg_header" size={28}/>
            </div>
                <Link to="/order">
                    <RiShoppingCart2Line className='svg_header' size={28}/>
                {/* {cartOpen && (
                  <div className='shop-cart'>
                    {props.orders.map(el => (
                      <Order key={el.id} item={el} />
                    ))}
                  </div>
                )} */}
                </Link>
            </div>
      </header>
    )
  }
}

export default Header