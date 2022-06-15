export default function HeaderIcon ({ icon, key }) {
    return (<a key={key} href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}></div></a>)
}