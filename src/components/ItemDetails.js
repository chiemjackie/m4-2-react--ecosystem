import React from "react";
import { useParams } from 'react-router-dom';
import { items, sellers } from '../data.js'


const ItemDetails = () => {
  const { itemId } = useParams();

  for (let i = 0; i < Object.values(items).length; i++) {
    let curItem = Object.values(items)[i];
    if (curItem.id === itemId) {
      
      let buttonText;
      if (curItem.quantity > 0) {
        buttonText = `$${curItem.price} - Buy now`
      } else {
        buttonText = 'Out of stock'
      }

      return (
        <div>
          <img src={`../${curItem.imageSrc}`}></img>
          <h2>{curItem.name}</h2>
          <em>{curItem.latinName}</em>
          <p>{curItem.description}</p>
          <em>Product of <strong>{curItem.countryOfOrigin}</strong></em>
          <button>{buttonText}</button>
          <div>
            <img src={`../${sellers[curItem.sellerId].avatarSrc}`}></img>
            Sold by: {sellers[curItem.sellerId].storeName}
          </div>
        </div>
      )
    }
  }
}

export default ItemDetails