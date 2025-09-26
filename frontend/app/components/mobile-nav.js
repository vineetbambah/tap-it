'use client'
import { useStore } from "../store"

const MobileNav = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    const setStudentFocus = useStore((state) => state.setStudentFocus)
    const setCheckinFocus = useStore((state) => state.setCheckinFocus)
    return (
        <div className="bg-white absolute bottom-0 w-full text-white flex h-16 justify-between border-8 border-black gap-0.25">
            <button className={`bg-black w-1/2 ${currentFocus==='studentdb'?'underline':'no-underline'}`} onClick={setStudentFocus} >Students</button>
            <button className={`bg-black w-1/2 ${currentFocus==='checkindb'?'underline':'no-underline'}`} onClick={setCheckinFocus}>Check-Ins</button>
        </div>
    )
}
export default MobileNav;