import { useEffect, useState } from "react"

export default function useFetch(url: string) {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((reason) => {
                    console.error("Caught rejection in useFetch", reason);
                })
        } catch (e) {
            console.error("Caught runtime error in useFetch", e);
        }

    }, [url]);
    return data;
}