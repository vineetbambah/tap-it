"use client"
import { useStore } from "../store";
import Action from "./action";
import CheckIns from "./checkins";
import DesktopNav from "./desktop-nav";
import Students from "./students";
const TableContainer = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    return(
        <div className="w-9/10 m-auto">
            <div className="hidden md:block"><DesktopNav/></div>
            <div className="px-8">{currentFocus==='checkindb' ? <CheckIns/>:<Students/>}</div>
            <div><Action/></div>
        </div>
    )
}
export default TableContainer;