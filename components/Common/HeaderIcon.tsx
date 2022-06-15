export default function HeaderIcon ({ icon, key }) {
    return (<a key={key} href=""><div className={`social-icon mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}></div></a>)
}