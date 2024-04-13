import QR from '../assets/Qrcode1.png'
import { Button } from './Button'
import playStore from "../assets/playstore.png"
import AppStore from "../assets/AppStore.png"
import {TwitterSquareFilled,InstagramOutlined,LinkedinFilled, FacebookOutlined} from '@ant-design/icons';

export const Social=()=>{
    return(
        <div>
            <div className='flex'>
                <div>
                    <img className='h-24 w-24' src={QR} alt="QR Code"/>
                </div>
                <div>
                    <div className='pl-5 h-10'>
                        <img className='h-10' src={playStore} alt="playstore"/>
                    </div>
                    <div className='pl-5'>
                        <img className='h-15 w-32' src={AppStore} alt="App Store"/>
                    </div>
                </div>
            </div>
            <div className='flex pt-2 justify-evenly pr-10'>
            <FacebookOutlined />
            <TwitterSquareFilled />
            <InstagramOutlined />
            <LinkedinFilled />
            </div>
        </div>
    )
}