import useFetch from "./useFetchToDo"

export default function ToDo() {
    const data = useFetch('https://jsonplaceholder.typicode.com/todos');
    return (
        <div className="flex justify-center m-5">
            <table className="table-auto">
                <tr>
                    <td className="m-2 text-center border-2	border-black">User ID</td>
                    <td className="m-2 border-2	text-center border-black">Title</td>
                    <td className="m-2 border-2	text-center border-black">Completed</td>
                </tr>
                <tbody>
                    {data.map((item, index) => <TableRow userId={item['userId']} title={item['title']} completed={item['completed']} index={index} />)}
                </tbody>
            </table>
        </div>
    )
}

function TableRow(props: any) {

    function getCss() {
        const css = "m-2 text-center border-2 border-black";
        if (props.index % 2 === 0) {
            return `${css} bg-sky-200`;
        } 
        return css;
    }

    return (
        <tr>
            <td className={getCss()}>{props.userId}</td>
            <td className={getCss()}>{props.title}</td>
            <td className={getCss()}>{props.completed ? 'true' : 'false'}</td>
        </tr>
    )
}