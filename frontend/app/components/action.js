import { useStore } from "../store";
const Action = () => {
    const currentFocus = useStore((state) => state.currentFocus)
    return (
        <div className="w-full flex flex-end">
            {currentFocus==='studentdb'?<button>Add Student</button>:<button>Add Check-In</button> }
        </div>
    )
}
export default Action;