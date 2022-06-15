import HeaderCard from "./HeaderCard"

export default function HeaderLogoAndCards ({ logo, altText, headerCards }) {
    return (
        <div className="hidden md:block w-full bg-white top-0 left-0 relative h-full">
            <div className="content-wrap">
                <div className="flex justify-between items-center h-full">
                    <img src={logo} alt={altText}/>
                    <div className="flex items-center space-x-20 h-full">
                        {headerCards?.map((card, index) => {
                            return (<HeaderCard card={card} key={index}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}