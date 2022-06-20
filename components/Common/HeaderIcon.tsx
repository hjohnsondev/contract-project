import { HeaderIconProps } from "../../types/contentTypes"

export default function HeaderIcon ({ icon }: HeaderIconProps) {
    return (
        <a href="">
            <div className={`social-icon mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}>
            </div>
        </a>
    )
}