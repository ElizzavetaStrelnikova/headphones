import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <div className='image'>
                <img className="scale" src={"./img/" + this.props.item.img}/>
            </div>
            <div className='description'>
                <div className='desc_card_1'>
                    <h2 className='card_title'>{this.props.item.title}</h2>
                    <b id='rate_item'>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.627 17.6794L5.41636 22.0285L7.37665 13.9117L0.960938 8.48434L9.38233 7.81803L12.627 0.113098L15.8716 7.81803L24.2943 8.48434L17.8773 13.9117L19.8376 22.0285L12.627 17.6794Z" fill="#FFCE7F"/>
                    </svg>
                    {this.props.item.rate}
                    </b>
                </div>
                <div className='desc_card_2'>
                    <b className='price'>{this.props.item.price} ₽</b>
                    <button className='button_buy' onClick={() => this.props.onAdd(this.props.item)}><span>Купить</span></button>
                </div>
            </div>
        </div>
    )
  }
}

export default Item