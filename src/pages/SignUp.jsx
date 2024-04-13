import { Bottom } from "../components/Bottom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { TopBar } from "../components/TopBar"
import cart from "../assets/cart.png"
import { InputBox } from "../components/InputBox"
import { Button } from 'antd';
import { BottomWarning } from "../components/BottomWarning"

export const SignUp=()=>{
    return (
        <div>
            <TopBar/>
            <Header/>
            <div className="flex">
                <div className="pb-20">
                    <img src={cart} alt="cart"/>
                </div>
                <div className=" flex bg-white w-auto text-center p-2 h-max px-10 grid place-content-center pt-44 pl-52">
                    <div className="font-semibold text-4xl">
                        Create an Account
                    </div>
                    <div className=" flex pt-4 place-content-start">
                        Enter your details below
                    </div>
                    <div>
                        <div>
                            <InputBox placeholder={"Name"}/>
                        </div>
                        <div>
                            <InputBox placeholder={"Email or Phone Number"}/>
                        </div>
                        <div className="pb-4">
                            <InputBox placeholder={"Password"}/>
                        </div>
                    </div>
                        
                        <Button className="h-12" type="primary" danger>Create Account</Button>
                        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
            <Footer/>
            <Bottom/>
        </div>
    )
}