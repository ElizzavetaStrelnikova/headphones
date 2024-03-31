import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
        <main>
        <h2>Наушники</h2>
        <div className='headphones' id='headphones'>
            {this.props.items.filter(el => el.category == "headphones").map(el => (<Item key={el.id} item = {el} onAdd={this.props.onAdd} />))}
        </div>
        <h2 id="header_wireless_headphones">Беспроводные наушники</h2>
        <div className='wireless_headphones'>
            {this.props.items.map(el => el.category == "wireless_headphones" ? (
            <Item key={el.id} item = {el} onAdd={this.props.onAdd}/>
        ) : '')}
        </div>
      </main>
    )
  }
}

export default Items