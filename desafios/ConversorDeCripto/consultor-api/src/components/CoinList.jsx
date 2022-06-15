import React, { useState, useEffect } from "react";
import Coin from "./Coin";

const CoinList = () => {

    const [coinList, setCoinList] = useState([]);

    const [coinName, setCoinName] = useState('');

    const url = "https://api.coinstats.app/public/v1/coins?skip=0";

    useEffect(() => {
        fetch(url)
            .then(
                (result) => result.json()
            ).then(
                (data) => setCoinList(data.coins)
            )
            .catch(
                (err) => console.log(`Error: ${err}`)
            )
    }, []);

    const filteredCoins = coinList.filter(
        (coin) => {
            return coin.name.toLowerCase().includes(coinName.toLowerCase())
        }
    )

    return (
        <div>
            <div>
                <input type="text" placeholder="Moeda" onChange={(event) => { setCoinName(event.target.value) }} />
            </div>
            <div>
                {filteredCoins.map(
                    (coin) => {
                        return (
                            <Coin name={coin.name} price={coin.price} icon={coin.icon} symbol={coin.symbol} />
                        )
                    }
                )}
            </div>
        </div>
    )

}

export default CoinList;