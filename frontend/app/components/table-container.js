"use client"
import { useStore } from "../store";
import Action from "./action";
import CheckIns from "./checkins";
import Students from "./students";
const TableContainer = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    return(
        <div>
            {currentFocus==='checkindb' ? <CheckIns/>:<Students/>}
            <Action/>
        </div>
    )
}
export default TableContainer;