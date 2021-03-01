import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand" href="#">BD Cricket Squad</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    
                </ul>
            </div>
        </nav>
    );
};

export default Header;