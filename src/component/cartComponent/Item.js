import React from 'react'

function Item(props) {

    const {id,img,name,price,amount} = props

    return (
        <div className='myItem'>
            <div className="imgBox">
                <img src={img} alt="" />
            </div>
            <ul>
                <li>{name}</li>
                <li style={{fontWeight : 'bold'}}>{price} $</li>
                <li><button onClick={() => props.removeItem(id)}>ازالـة</button></li>
            </ul>
            <div className="itemCounter">
                <i className="fas fa-2x fa-caret-up" onClick={() => props.addAmount(id)}></i>
                <span>{amount}</span>
                <i className="fas fa-2x fa-caret-down" onClick={() => props.subAmount(id)}></i>
            </div>
        </div>
    )
}

export default Item
