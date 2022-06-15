import HeaderIcon from "./HeaderIcon"

export default function HeaderTagline ({ tagLine, icons }) {
    return (
        <div className="hidden md:block w-full bg-slate-100 top-0 left-0 relative h-full">
            <div className="content-wrap">
                <div className="flex justify-between items-center h-full">
                    <p className="text-gray-500 py-4">{tagLine}</p>
                    <div className="flex items-center h-full">
                        {icons?.map((icon, index) => {
                            return (<HeaderIcon icon={icon} key={index}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}