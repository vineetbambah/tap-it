'use client'
import { useStore } from "../store"
const DesktopNav = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    const setStudentFocus = useStore((state) => state.setStudentFocus)
    const setCheckinFocus = useStore((state) => state.setCheckinFocus)
    return (
        <div className="bg-white w-full flex justify-between">
            <button className={`w-full ${currentFocus === 'studentdb' ? 'underline' : 'no-underline'}`} onClick={setStudentFocus} >Students</button>
            <button className={`w-full ${currentFocus === 'checkindb' ? 'underline' : 'no-underline'}`} onClick={setCheckinFocus}>Check-Ins</button>
        </div>
    )
}
export default DesktopNav;