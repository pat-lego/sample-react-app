import { useState } from "react";
import Table from "../../components/Todo/Table"
import AddToDo from "../../components/Todo/AddToDo";

export default function ToDo() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col justify-center">
            <div>
                <div className="flex w-full justify-center">
                    <button className="border-2 w-56 border-black rounded-lg hover:bg-red-600" onClick={() => setIsOpen(true)}>Add To Do</button>
                </div>
                <Table />
            </div>
            {isOpen ?
                <div className="relative">
                    <AddToDo isOpen={setIsOpen} />
                </div> : <></>
            }
        </div>
    )
}