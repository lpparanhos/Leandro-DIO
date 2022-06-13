import React from "react";
import CryptoTile from "./CryptoTile";
import BuyForm from "./BuyForm";
import Transactions from "./Transactions";
import BTC from '../assets/BTC.png'
import ETH from '../assets/ETH.png'
import LTC from '../assets/LTC.png'

const Home = () => {

    const tiles = [
        { id: 1, icon: BTC, name: "BTC", price: "128000" },
        { id: 2, icon: ETH, name: "ETH", price: "8000" },
        { id: 3, icon: LTC, name: "LTC", price: "200" }
    ]

    const [selectedTile, setSelectedTile] = useState(tiles[0])

    const [list, setList] = useState([])

    const handleSelect = (data) => {
        setSelectedTile(data)
    }

    const buildList = (list) => {
        setList(list)
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        {
                            tiles.map(
                                (coin) => {
                                    <CryptoTile
                                        key={coin.id}
                                        data={coin}
                                        onClick={handleSelect}
                                        selectedTile={coin.id === selectedTile.id} />
                                }
                            )
                        }
                    </div>
                </div>
                <BuyForm
                    data={selectedTile}
                    onPurchase={buildList}
                />
                <div>
                    <Transactions list={list} />
                </div>
            </div>
        </div>
    )

}