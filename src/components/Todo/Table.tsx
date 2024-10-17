import { useCallback, useRef, useState } from "react";
import { useFetchToDo } from "./useFetchToDo";


export default function Table() {
    let responseData = useRef([] as any[]);
    const [filterString, setFilterString] = useState('');
    const [filteredData, setFilteredData] = useState([] as any[]);

    useFetchToDo('https://jsonplaceholder.typicode.com/todos', setFilteredData, responseData);
    
    const filterTable = useCallback((e: string) => {
        setFilterString(e);
        if (e.length >= 3) {
             const tempData:any[] = responseData.current.filter((i: any) => JSON.stringify(i).includes(e));
            setFilteredData(tempData);
        } else {
            setFilteredData(responseData.current);
        }
    }, [setFilteredData]);

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
                    <tr>
                        <td><input className="w-full" type="text" placeholder="Filter table...."  value={filterString} onChange={(e) => filterTable(e.target.value)} /></td>
                    </tr>
                    {filteredData.map((item, index) => <TableRow userId={item['userId']} title={item['title']} completed={item['completed']} index={index} />)}
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
