import React from 'react'

function NavBar(props) {
    return (
        <nav>
            <h1>HELLO WORLD</h1>
            <div className="cart">
                <i className="fas fa-2x fa-shopping-cart"></i>
                <span><h1>{props.allAmount}</h1></span>
            </div>
        </nav>
    )
}

export default NavBar
