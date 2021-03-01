import React from 'react';
import "./PlayerCart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

const PlayerCart = (props) => {
    const cart = props.cart;
    let totalSalary = 0;
    return (
        <div className="cart-container" style={{width: "300px"}}>
            <h3> Total Selected Player: {cart.length}</h3>
            <div>
                <ul>
                    {
                        cart.map(player=> {
                            totalSalary +=player.salary;
                            return <p><FontAwesomeIcon icon={faDotCircle}/> {player.name} for {player.salary}৳</p>
                        })
                    }
                </ul>
                <h4>Total Budget: {totalSalary}</h4>
            </div>
        </div>
    );
};

export default PlayerCart;