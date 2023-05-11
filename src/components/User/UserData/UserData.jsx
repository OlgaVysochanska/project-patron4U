import styles from './UserData.module.scss'
import UserDataItem from './UserDataItem/UserDataItem'

const UserData = ()=>{return (<div className={styles.container}>
    <h2>My information:</h2>
    <UserDataItem />
    <h2>My pets:</h2>
</div>)}

export default UserData