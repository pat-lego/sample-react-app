import { useCallback, useState } from "react"

type FormData = {
    [key: string]: string;
}

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export default function AddToDo(props: any) {
    const [formData, setFormData] = useState({} as FormData);
    const postToDo = useCallback(() => {
        console.log(`Form Data is set to ${JSON.stringify(formData)}`)
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => console.log(`Post to ${baseUrl} resulted in ${res.status}`))
            .then(() => props.isOpen(false))
            .catch((reason) => {
                console.error("Caught rejection in useFetch", reason);
            })
    }, [])

    return (
        <div className="flex flex-col fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <input type="text" value={formData?.userId} onChange={(e) => setFormData({...formData, userId: e.target.value})} placeholder="User ID"></input>
            <input type="text" value={formData?.title} onChange={(e) => setFormData({...formData, title: e.target.value})}  placeholder="Title"></input>
            <input type="text" value={formData?.completed} onChange={(e) => setFormData({...formData, completed: e.target.value})} placeholder="Completed"></input>
            <button onClick={postToDo}>Submit</button>
        </div>
    )
}