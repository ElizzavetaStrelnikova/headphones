import React, { Component } from 'react'
import Items from '../components/Items'
import Item from '../components/Item';


export class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "Image.png",
          title: "Apple BYZ S8521",
          price: 2927,
          rate: 4.7,
          category: "headphones"
        },
        {
          id: 2,
          img: "Image2.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          category: "headphones"
        },
        {
          id: 3,
          img: "Image3.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          category: "headphones"
        },
        {
          id: 4,
          img: "Image.png",
          title: "Apple BYZ S8521",
          price: 2927,
          rate: 4.7,
          category: "headphones"
        },
        {
          id: 5,
          img: "Image2.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          category: "headphones"
        },
        {
          id: 6,
          img: "Image3.png",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          category: "headphones"
        },
        {
          id: 7,
          img: "Image4.png",
          title: "Apple AirPods",
          price: 9527,
          rate: 4.7,
          category: "wireless_headphones"
        },
        {
          id: 8,
          img: "Image5.png",
          title: "GERLAX GH-04",
          price: 6527,
          rate: 4.7,
          category: "wireless_headphones"
        },
        {
          id: 9,
          img: "Image6.png",
          title: "BOROFONE B04",
          price: 7527,
          rate: 4.7,
          category: "wireless_headphones"
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      // <Items items={this.state.items} onAdd={this.addToOrder} />
      // <main>
      //   <h2>Наушники</h2>
      //   <div className='headphones' id='headphones'>
      //       {this.props.items.filter(el => el.category == "headphones").map(el => (<Item key={el.id} item = {el} onAdd={this.props.onAdd} />))}
      //   </div>
      //   <h2 id="header_wireless_headphones">Беспроводные наушники</h2>
      //   <div className='wireless_headphones'>
      //       {this.props.items.map(el => el.category == "wireless_headphones" ? (
      //       <Item key={el.id} item = {el} onAdd={this.props.onAdd}/>
      //   ) : '')}
      //   </div>
      // </main>
      <Items items={this.state.items} onAdd={this.addToOrder} />
      
    )
  }
  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item]})
}
}

export default HomePage;