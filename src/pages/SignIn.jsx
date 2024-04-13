import { Bottom } from "../components/Bottom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from 'antd';
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { TopBar } from "../components/TopBar"
import cart from "../assets/cart.png"
import { useNavigate} from "react-router-dom";

export const SignIn=()=>{
    const navigate = useNavigate();
    return(
        <div>
        <TopBar/>
        <Header/>
        <div className="flex">
                <div className="pb-20">
                    <img src={cart} alt="cart"/>
                </div>
                <div className=" flex bg-white w-auto text-center p-2 h-max px-10 grid place-content-center pt-44 pl-52">
                    <div className="font-semibold text-4xl">
                        Log In to Exclusive
                    </div>
                    <div className=" flex pt-4 place-content-start">
                        Enter your details below
                    </div>
                    <div>
                        <div>
                            <InputBox placeholder={"Email or Phone Number"}/>
                        </div>
                        <div className="pb-4">
                            <InputBox placeholder={"Password"}/>
                        </div>
                    </div>
                    <div className="flex justify-between pt-2">
                        <Button onClick={useNavigate("/dashboard")} className="w-32 h-12" type="primary" danger>Log In</Button>
                        <Button  className="pt-3 " type="text" danger>Forget Password?</Button>

                    </div>
                        
                </div>
            </div>
        <Footer/>
        <Bottom/>
        </div>
    )
}