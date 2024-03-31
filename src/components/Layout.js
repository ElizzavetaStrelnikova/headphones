import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export class Layout extends Component {
  render() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
      
    )
  }
}

export default Layout