import React, { useState } from 'react';
import { Bottom } from "../components/Bottom";
import { Caraousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { HeaderWithCart } from "../components/HeaderWithCart";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Carrd } from "../components/Card";
import duffle from "../assets/dufflebag.png";
import speaker from "../assets/speaker.png";
import jacket from "../assets/jacket.png";
import console from "../assets/console.png";
import game from "../assets/game.png";
import keyboard from "../assets/keyboard.png";
import screen from "../assets/screen.png";
import laptop from "../assets/laptop.png";
import coat from "../assets/coat.png";
import jbl from "../assets/jbl.png";
import chair from "../assets/chair.png";
import camera from "../assets/camera.png";
import car from "../assets/car.png";
import rect from "../assets/rect.png"
import dog from "../assets/dog.png"
import makeup from "../assets/makeup.png"
import shoe from "../assets/shoe.png"
import services from "../assets/services.png"

import { useNavigate } from 'react-router-dom';
import { Services } from '../components/Services';

export function HomePage() {
    const navigate = useNavigate();
    const items = [
        {
            title: 'Gucci Duffle bag',
            description: "$960",
            image: duffle,
        },
        {
            title: 'RGB liquid CPU Cooler',
            description: "$1960",
            image: speaker,
        },
        {
            title: 'GP11 Shooter USB Gamepad',
            description: "$550",
            image: console,
        },
        {
            title: 'SSeries Comfort Chair',
            description: "$375",
            image: chair,
        },
        {
            title: 'Quilted Satin Jacket',
            description: "$750",
            image: jacket,
        },
        {
            title: 'ASUS FHD Gaming Laptop',
            description: "$960",
            image: laptop,
        },
        {
            title: 'IPS LCD Gaming Monitor',
            description: "$1160",
            image: screen,
        },
        {
            title: 'HAVIT HV-G92 Gamepad',
            description: "$660",
            image: game,
        },
        {
            title: 'AK-900 Wired Keyboard',
            description: "$200",
            image: keyboard,
        },
    ];
    const item = [
        {
          title: 'The North Coat',
          description:"$260",
          image: coat,
        },
        {
          title: 'Gucci duffle bag',
          description:"$960",
          image: duffle,
        },
        {
            title: 'RGB liquid CPU Cooler',
            description: "$160",
            image: speaker,
        },
        {
            title: 'ASUS FHD Gaming Laptop',
            description: "$960",
            image: laptop,
        },
        
      ];
    const itemm = [
        {
          title: 'Breed Dry Dog Food',
          description:"$100",
          image: dog,
        },
        {
          title: 'CANON EOS DSLR Camera',
          description:"$960",
          image: camera,
        },
        {
            title: 'ASUS FHD Gaming Laptop',
            description: "$700",
            image: laptop,
        },
        {
            title: 'Curlogy Product Set',
            description: "$960",
            image: makeup,
        },
        
      ];
    const ittemm = [
        {
          title: 'Kids Electric Car',
          description:"$960",
          image: car,
        },
        {
          title: 'Jr. Zoom Soccer Cleats',
          description:"$1160",
          image: shoe,
        },
        {
            title: 'GP11 Shooter USB Gamepad',
            description: "$660",
            image: game,
        },
        {
            title: 'Quilten Satin Jacket',
            description: "$660",
            image: jacket,
        },
        
      ];

    const [startIndex, setStartIndex] = useState(0);
    const cardPerPage = 4;

    const handleNext = () => {
        if (startIndex + cardPerPage < items.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div>
            <TopBar />
            <HeaderWithCart />
            <div className="grid grid-cols-6 ">
                <div className="col-span-2"><SideBar /></div>
                <div className="pr-40 col-span-4"><Caraousel /></div>
            </div>
            <div className="flex px-28 pt-16">
                <div>
                    <img src={rect} alt="Rectangle" />
                </div>
                <div className="font-medium text-lg pt-2 pl-5 text-red-600">
                    Today's
                </div>
            </div>
            <div className="px-28 py-10 flex justify-between">
                <div className="font-bold text-3xl">
                    Flash Sales
                </div>
                <div className="" >
                    <Button className="rounded-full" onClick={handlePrevious}><ArrowLeftOutlined /></Button>
                    <Button className="rounded-full" onClick={handleNext}><ArrowRightOutlined /></Button>
                </div>
            </div>
            <Carrd items={items.slice(startIndex, startIndex + cardPerPage)} />
            <div className='py-8 flex justify-center'>
                <Button  className="h-12 font-semibold py-3" type='primary' danger onClick={()=>{
                    navigate("/allproducts")
                }} >View All Products</Button>
            </div>
            <div className="flex px-28 pt-16">
                <div>
                    <img src={rect} alt="Rectangle" />
                </div>
                <div className="font-medium text-lg pt-2 pl-5 text-red-600">
                    Today's
                </div>
            </div>
            <div className="px-28 py-10 flex justify-between">
                <div className="font-bold text-3xl">
                    Best Selling Products
                </div>
                <div className="" >
                    <Button className="h-12 font-semibold" type='primary' danger>View All</Button>
                </div>
            </div>
            <Carrd items={item}/>
            <div className='px-28 py-20'>
                <img className='w-full' src={jbl} alt="jbl speaker"/>
            </div>
            <div className="flex px-28 pt-16">
                <div>
                    <img src={rect} alt="Rectangle" />
                </div>
                <div className="font-medium text-lg pt-2 pl-5 text-red-600">
                    Our Products
                </div>
            </div>
            <div className="px-28 py-10 flex justify-between">
                <div className="font-bold text-3xl">
                    Explore Our Products
                </div>
                <div className="" >
                    <Button className="rounded-full" onClick={handlePrevious}><ArrowLeftOutlined /></Button>
                    <Button className="rounded-full" onClick={handleNext}><ArrowRightOutlined /></Button>
                </div>
            </div>
            <div className="py-10" >
            <Carrd items={itemm}/>
            </div>
            <div className='py-10'>
            <Carrd items={ittemm}/>
            </div>
            <div className='pb-8 flex justify-center'>
                <Button  className="h-12 font-semibold py-3" type='primary' danger onClick={()=>{
                    navigate("/allproducts")
                }} >View All Products</Button>
            </div>
            <div className='px-28 py-10 flex justify-center'>
                <img src={services} alt="services"/>
            </div>
            <Footer />
            <Bottom />
        </div>
    );
}
