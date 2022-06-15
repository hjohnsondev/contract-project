export default function HeaderCard ({ card, key }) {
    return (
        <div key={key} className="flex items-center ml-3 h-full">
            <div className={`mr-3 text-4xl text-sky-500 mdi mdi-${card?.fields?.materialDesignIcon?.fields?.iconName}`}></div>  
            <div>
                <p><strong>{card?.fields?.title}</strong></p>
                <p className="text-gray-500">{card?.fields?.subText}</p>
            </div>
        </div>
    )
}