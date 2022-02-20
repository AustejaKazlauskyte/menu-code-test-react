import * as React from 'react'
import styles from './Main.module.scss'
import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'

const Main: React.FC = () => {
    return (
        <div className={styles.body}>
            <Header />
            <Menu />
        </div>
    )
}
export default Main
