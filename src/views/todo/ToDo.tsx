import { useCallback, useState } from "react";
import Table from "../../components/Todo/Table"
import AddToDo from "../../components/Todo/AddToDo";

export default function ToDo() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDone, setIsDone] = useState(true);

    const click = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen])

    return (
        <div className="flex flex-col justify-center">
            <div>
                <div className="flex w-full justify-center">
                    <button className="border-2 w-56 border-black rounded-lg hover:bg-red-600" onClick={click}>Add To Do</button>
                </div>
                {isDone ? <Table/>:  <div>Loading....</div>}
            </div>
            {isOpen ?
                <div>
                    <AddToDo isDone={setIsDone} isOpen={setIsOpen} />
                </div> : <></>
            }
        </div>
    )
}