import React from 'react';
import "./PlayerCart.css"
const PlayerCart = (props) => {

    const cart = props.cart;
    let totalSalary = 0;
    return (
        <div style={{width: "300px"} }>
            <h3>Player added {cart.length}</h3>
            <div>
                <ul>
                    {
                        cart.map(player=> {
                            totalSalary +=player.salary;
                            return <p>{player.name} for {player.salary}</p>
                        })
                    }
                </ul>
                <h3>total salary {totalSalary}</h3>
            </div>
        </div>
    );
};

export default PlayerCart;