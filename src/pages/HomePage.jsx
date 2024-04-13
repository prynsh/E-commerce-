import { Bottom } from "../components/Bottom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TopBar } from "../components/TopBar";

export function HomePage(){
    return(
        <div>
            <TopBar/>
            <Header/>
            <Footer/>
            <Bottom/>
        </div>
    )
}