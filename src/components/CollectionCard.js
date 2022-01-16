import React from 'react'
import weth from "../assets/weth.png"
import "./CollectionCard.css";

function CollectionCard({id, name, traits, image}) {
    return (
        <div className="collectionCardContainer">
            <div className="collectionCardImage">
                <img src={image} alt="" />
            </div>
            <div className="collectionCardInfo">
                <div className='name'>
                    {name}
                    <div className='id'>#{id}</div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt="" />
                    <div className='price'>
                        {traits[0]?.value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
