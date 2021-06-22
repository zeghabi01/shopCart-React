import React , {useState , useEffect} from 'react'
import Item from './cartComponent/Item'

import data from '../data'


function Cart(props) {

    let cartStock = 0;
    let total = 0;

    const [item,setItem] = useState(data)

    const clearCart = () => {setItem([])}

    const removeItem = (id) => {setItem(item.filter(item => item.id !== id))}

    const addAmount = (id) => {
    
            let newItems = item.map(item => {
                    if(item.id === id) {
                        item.amount ++
                    }
                    return item
            })

         setItem(newItems)
    }

    const subAmount = (id) => {
    
            let newItems = item.map(item => {
                    if(item.id === id) {
                        if(item.amount > 1)
                            item.amount --
                    }
                    return item
            })

         setItem(newItems)
    }
 
    item.forEach(item => {
        total += item.amount * item.price
        cartStock += item.amount
    })


    useEffect(() => {
        props.handleChange(cartStock)
    })

    return (
        <div id='myCart' className='myCart'>
            <h1>سلة المشتريات</h1>
            {item.map(item => {
                return <Item 
                key={item.id}
                {...item}
                removeItem = {removeItem}
                addAmount = {addAmount}
                subAmount = {subAmount}
                />
            })}

            <hr />
            {!(item.length === 0) ? 
            <>
                <ul id='cartFooter' className="cartFooter">
                    <li><h2>السعر الإجمالي</h2></li>
                    <li><h2>${total}</h2></li>
                </ul> 

                <div className="clear">
                    <button className='clearButton' onClick={clearCart}>تفريغ المنتجات</button>
                </div>
            </>
            : <p className='emptyCart'>السلة فارغة</p>}
        </div>
    )
}

export default Cart
