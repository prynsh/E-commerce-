import { Bottom } from "../components/Bottom"
import { Carrd } from "../components/Card";
import { Footer } from "../components/Footer"
import { HeaderWithCart } from "../components/HeaderWithCart";
import { TopBar } from "../components/TopBar"
import { Button} from 'antd';
import rect from "../assets/rect.png"
import duffle from "../assets/dufflebag.png";
import speaker from "../assets/speaker.png";
import jacket from "../assets/jacket.png";
import console from "../assets/console.png";
import game from "../assets/game.png";
import keyboard from "../assets/keyboard.png";
import screen from "../assets/screen.png";
import laptop from "../assets/laptop.png";

export const AllProducts=()=>{
    const items = [
        {
          title: 'Gucci Duffle bag',
          description:"$960",
          image: duffle,
        },
        {
          title: 'RGB liquid CPU Cooler',
          description:"$1960",
          image: speaker,
        },
        {
          title: 'GP11 Shooter USB Gamepad',
          description:"$550",
          image: console,
        },
        {
          title: 'Quilted Satin Jacket',
          description:"$750",
          image: jacket,
        },
        
      ];
      const item = [
        {
          title: 'ASUS FHD Gaming Laptop',
          description:"$960",
          image: laptop,
        },
        {
          title: 'IPS LCD Gaming Monitor',
          description:"$1160",
          image: screen,
        },
        {
          title: 'HAVIT HV-G92 Gamepad',
          description:"$660",
          image: game,
        },
        {
          title: 'AK-900 Wired Keyboard',
          description:"$200",
          image: keyboard,
        },
        
      ];
    return(
        <div>
            <TopBar/>
            <HeaderWithCart/>
            <div className="flex justify-between px-32 pb-4">
                <div className="font-medium">
                    Wishlist(4)
                </div>
                <div>
                <Button className="h-12 font-semibold py-3 px-14">Move All to Bag</Button>
                </div>
            </div>
            <div className="py-5">
            <Carrd items={items} />
            </div>
            <div className="flex justify-between pl-28 py-14 px-32">
                <div className="flex">
                    <div>
                        <img src={rect}/>
                    </div>
                    <div className="font-medium text-lg pt-2 pl-5">
                        Just For You
                    </div>
                </div>
                <div>
                <Button className="h-12 font-semibold py-3 px-14" >See All</Button>
                </div>
            </div>
            <div className="py-5 pb-15">
            <Carrd items={item} />
            </div>
            <Footer/>
            <Bottom/>
        </div>
    )
}