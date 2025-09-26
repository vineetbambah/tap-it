import { useStore } from "../store";
import CheckInAction from "./checkinAction";
import StudentAction from "./studentAction";
const Action = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    return (
        <div className="w-full flex justify-end">
            {currentFocus==='studentdb'?<StudentAction/>:<CheckInAction/> }
        </div>
    )
}
export default Action;

