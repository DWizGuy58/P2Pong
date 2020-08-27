import styles from "../styles/user-block.module.css"
import { useState } from "react"

const UserBlock = ({ sideNum }) => {
    const [percentage, setPercentage] = useState(50);
    return (
        <div className={styles["user-block"]} styles={{ position: relative, left: `${percentage}%` }}>
        </div>
    )
}

export default UserBlock

