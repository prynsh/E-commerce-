import {useNavigate} from "react-router-dom";
import { Button } from 'antd';
import React from 'react';

export const CartTotal = ({ items }) => {
    const navigate = useNavigate();
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping=0;
  const total=subtotal+shipping;
  return (
    <div className="border border-black rounded-md p-5 h-64 w-96 content-start">
      <div className="font-medium mb-2">Cart Total</div>
      <div className='flex justify-between'>
      <div>Subtotal:</div>
      <div> ${subtotal.toFixed(2)}</div>
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='flex justify-between'>
      <div>Shipping: </div>
      <div>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className='flex justify-between'>
      <div>Total:</div>
      <div> ${total.toFixed(2)}</div>
      </div>
      <div className='flex justify-center pt-7'>
      <Button onClick={()=>{
            navigate("/checkout");
      }} className="h-10" type='primary' danger >Proceed to CheckOut</Button>
      </div>
    </div>
  );
};

