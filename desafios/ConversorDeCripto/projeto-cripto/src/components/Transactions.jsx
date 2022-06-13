import React from "react";

const Transactions = ({ list }) => {

    return (
        <div>
            <h4>
                {
                    list.length ? list.map(
                        (item) => {
                            <div key={item.id}>
                                <span>
                                    
                                </span>
                            </div>
                        }
                    )
                }
            </h4>
        </div>



    )
}