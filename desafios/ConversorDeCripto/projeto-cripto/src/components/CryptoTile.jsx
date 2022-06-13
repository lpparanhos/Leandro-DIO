import React from "react";

const CryptoTile = ({ data, selectTile, onclick }) => {
    
    const { name, rate, icon } = data;

    const handleClick = () => onclick(data);

    return (
        <div

            className={`card ${selectTile} && 'selected'`}
            onClick={handleClick}>

            <div>

                <img className="coin-icon" src={icon} alt="icon" />

                <div>
                    {name}
                    {rate}
                </div>

            </div>

        </div>)
}