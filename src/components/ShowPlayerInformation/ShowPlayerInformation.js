import React, { useState, useEffect } from 'react';
import "./show-player-information.css"
import playersData from '../../data/players.json';
import Player from "../Player/Player"
import PlayerCart from '../PlayerCart/PlayerCart';

const ShowPlayerInformation = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    }, [])

    const [cart, setCart]= useState([]);
    const addToCartHandle = (player) =>{
        if(cart.indexOf(player) === -1){
            const newCart = [...cart, player];
            setCart(newCart);
        }
        else{
            alert("Player already added")
        }
    }
    return (
        <div className="main-page">
            <div className="grid">
                {
                    players.map(player => <Player player={player} addToCartHandle={addToCartHandle}></Player>)
                }
            </div>
            <div>
                <PlayerCart cart={cart}></PlayerCart>
            </div>
        </div>
    );
};

export default ShowPlayerInformation;