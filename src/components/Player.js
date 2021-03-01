import React from 'react';
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, salary, image } = props.player;
    console.log(props)

    return (
        <div className="player-parent">
            <div className="player-card">
                <div>
                    <img className="player-image" src={image} alt="Avatar"></img>
                </div>
                <div className="player-container">
                    <h4><b>{name}</b></h4>
                    <h6>Salary ৳{salary}</h6>
                    <button className="btn btn-info" onClick={() => props.addToCartHandle(props.player)}>  <FontAwesomeIcon icon={faPlusSquare}/> Add Player </button>
                </div>
            </div>
        </div>
    );
};

export default Player;