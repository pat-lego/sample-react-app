import { useState } from "react";
import { useFetchToDo } from "./useFetchToDo"


const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export default function Table() {
    const [url, setUrl] = useState(baseUrl);
    const data = useFetchToDo(url);
   
    return (
        <div className="flex flex-col justify-center m-5">
            <table className="table-auto">
                <thead>
                    <tr>
                        <td className="m-2 text-center border-2	border-black">User ID</td>
                        <td className="m-2 border-2	text-center border-black">Title</td>
                        <td className="m-2 border-2	text-center border-black">Completed</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <TableRow userId={item['userId']} title={item['title']} completed={item['completed']} index={index} />)}
                </tbody>
            </table>
        </div>
    )
}

function TableRow(props: any) {

    function getRowCss() {
        const css = "m-2 text-center border-2 border-black";
        if (props?.index % 2 === 0) {
            return `${css} bg-sky-200`;
        }
        return css;
    }

    return (
        <tr>
            <td className={getRowCss()}>{props.userId}</td>
            <td className={getRowCss()}>{props.title}</td>
            <td className={getRowCss()}>{props.completed ? 'true' : 'false'}</td>
        </tr>
    )
}
