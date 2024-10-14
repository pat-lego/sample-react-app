export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-9xl	italic">Oh dang!</h1>
            <div className="m-2">Go <a className="hover:text-red-600" href="/">Home?</a></div>
        </div>
    ); 
}