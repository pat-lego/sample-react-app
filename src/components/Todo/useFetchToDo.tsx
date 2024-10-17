import { useEffect } from "react"

export const useFetchToDo = (url: string, setData: Function, responseData: React.MutableRefObject<any[]>)  => {
    useEffect(() => {
        try {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    responseData.current = data;
                    setData(data);
                })
                .catch((reason) => {
                    console.error("Caught rejection in useFetch", reason);
                })
        } catch (e) {
            console.error("Caught runtime error in useFetch", e);
        }

    }, [setData, url, responseData]);
}