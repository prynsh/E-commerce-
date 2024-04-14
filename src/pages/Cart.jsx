

import { Bread } from "../components/BreadCrumb"
import { CartCard } from "../components/CartCard"
import { HeaderWithCart } from "../components/HeaderWithCart"
import { TopBar } from "../components/TopBar"
import screen from "../assets/screen.png"
import game from "../assets/game.png"
import { Button, Input } from "antd"
import { CartTotal } from "../components/CartTotal"
import { useState } from "react"
import { Bottom } from "../components/Bottom"
import { Footer } from "../components/Footer"
import { useNavigate } from "react-router-dom"

export const Cart=()=>{
    const navigate = useNavigate();
    const [items, setItems] = useState([
        { id: 1, image: screen, name: "LCD Monitor", price: 10, quantity: 1 },
        { id: 2, image: game, name: "H1 GamePad", price: 10, quantity: 1 }
      ]);
    
      const handleQuantityChange = (itemId, newQuantity) => {
        const updatedItems = items.map(item => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setItems(updatedItems);
      };
    return (
        <div>
            <TopBar/>
            <HeaderWithCart/>
            <Bread/>
            <div className="px-28 pt-10 font-medium">
                <div className="flex justify-between mb-4">
                    <div>Product</div>
                    <div className="pl-5">Price</div>
                    <div className="pl-8">Quantity</div>
                    <div>Subtotal</div>
                </div>
            </div>
            {items.map((item, index) => (
            <CartCard
                key={index}
                index={index}
                {...item}
                onQuantityChange={handleQuantityChange}/>
                ))}
                <div className="flex justify-end px-28 pt-5">
                    <div><Button onClick={()=>{
                        navigate("/allproducts")
                    }} className="font-semibold h-12">Return To Shop</Button></div>
                    {/* <div><Button className="font-semibold h-12">Update Cart</Button></div> */}
                </div>
                <div className="flex px-24  py-10 justify-between">
                <div className="flex ">
                    <Input className="h-10 mx-2" placeholder="Coupon Code"/>
                    <div>
                        <Button  className="h-10" type="primary" danger>Apply Coupon</Button>
                    </div>
                </div>
                <div>
                <CartTotal items={items}/>
                </div>

                </div>
                <Footer/>
                <Bottom/>
        </div>
    )
}