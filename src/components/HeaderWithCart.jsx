import { SearchOutlined,HeartOutlined,ShoppingCartOutlined,UserOutlined } from "@ant-design/icons"
import { Button } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export function HeaderWithCart(){
    const navigate = useNavigate();
    const items = [
        {
          label: <Link to="/home">Home</Link>,
          key: '0',
        },
        {
          label: <Link to="/allproducts">All Products</Link>,
          key: '1',
        },
        {
          label: <Link to="/cart">Cart</Link>,
          key: '3',
        },
        {
          label: <Link to="/">SignOut</Link>,
          key: '4',
        },
      ];
    return (
        <div className="grid grid-col-2 pb-5">
            <div className="flex justify-between pl-28 pr-24 mr-10 pt-14">
                <div className="font-bold text-4xl pt-2"> <Link to="/home">Exclusive</Link></div>
                        <div className="flex justify-between space-x-10 pt-4">
                                <Button  onClick={()=>{
                                    navigate('/home')
                                }} type="text">Home</Button> 
                            <Button onClick={()=>{
                                    navigate('/contact')
                                }} type="text">Contact</Button>
                            <Button onClick={()=>{
                                    navigate('/about')
                                }} type="text">About</Button>
                            <Button onClick={()=>{
                                    navigate('/')
                                }} type="text">SignUp</Button>
                            
                        </div>
                                <div className="flex ">
                                    <input type="text" placeholder='What are you looking for? '   />
                                            <div className="pt-3 pl-2 ">
                                            < SearchOutlined />
                                            </div>
                                            <div className="flex justify-around pl-10">
                                                <div className="pt-3  ">
                                                    <Button className="rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                                    </Button>
                                                </div>
                                                <div className="pt-3 pl-2 ">
                                                    <Button className="rounded-full" onClick={()=>{
                                                        navigate("/cart")
                                                    }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                                    </Button>
                                                </div>
                                                <div className="pt-3 pr-2 pl-1 ">
                                                <Dropdown menu={{
                                                        items,
                                                        }}trigger={['click']}>
                                                <a onClick={(e) => e.preventDefault()}><Space>                                                    
                                                <Button className="rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                </svg>
                                                    </Button>
                                                </Space></a></Dropdown>

                                                </div>
                                            </div>
                                </div>
                        </div>
                        <div className="font-medium">
                        <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            </div>
        </div>
)}