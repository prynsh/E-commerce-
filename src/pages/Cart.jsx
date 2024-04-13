

import { Bread } from "../components/BreadCrumb"
import { HeaderWithCart } from "../components/HeaderWithCart"
import { TopBar } from "../components/TopBar"

export const Cart=()=>{
    return (
        <div>
            <TopBar/>
            <HeaderWithCart/>
            <Bread/>
        </div>
    )
}