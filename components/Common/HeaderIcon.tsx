import { headerIcon } from "../../types/ContentTypes/headerTypes";

export default function HeaderIcon ({ icon }: headerIcon) {
    return (
        <a href="">
            <div className={`social-icon mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}>
            </div>
        </a>
    )
}