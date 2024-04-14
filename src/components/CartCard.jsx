import React, { useState, useEffect } from 'react';

export const CartCard = ({ id, image, name, price, quantity, onQuantityChange }) => {
    const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value);
      onQuantityChange(id, newQuantity);
    };

  const subtotal = price * quantity;

  return (
    <div className="px-28 pb-5 font-medium">
      <div className="flex justify-between items-center">
        <div>
          <img src={image} alt={name} className="w-20 h-20 mr-2" />
          {name}
        </div>
        <div className='pr-8'>${price.toFixed(2)}</div>
        <div className='pr-3'>
          <input
            onChange={handleQuantityChange}
            type="number"
            className="flex h-10 w-20 rounded-md border  border-black border-input bg-background px-3 py-2 text-sm"
            value={quantity}
            placeholder="Enter quantity"
          />
        </div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
};
