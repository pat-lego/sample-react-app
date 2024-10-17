import { useCallback, useState } from "react"

type FormData = {
    [key: string]: string;
}

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export default function AddToDo(props: any) {
    const [formData, setFormData] = useState({} as FormData);
    const postToDo = useCallback(() => {
        props.isDone(false);
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => console.log(`Post to ${baseUrl} resulted in ${res.status}`))
            .then(() => props.isOpen(false))
            .then(() => props.isDone(true))
            .catch((reason) => {
                console.error("Caught rejection in useFetch", reason);
            })
    }, [formData, props])

    return (
        <div className="border-2 border-black flex flex-col fixed z-50 justify-center items-center w-full md:inset-0 max-h-full">
            <input className="border-2 border-black w-9/12" type="text" value={formData?.userId} onChange={(e) => setFormData({ ...formData, userId: e.target.value })} placeholder="User ID"></input>
            <input className="border-2 border-black w-9/12" type="text" value={formData?.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Title"></input>
            <input className="border-2 border-black w-9/12" type="text" value={formData?.completed} onChange={(e) => setFormData({ ...formData, completed: e.target.value })} placeholder="Completed"></input>
            <button className="p-2 bg-sky-600 rounded-lg hover:bg-red-600" onClick={postToDo}>Submit</button>
        </div>
    )
}