import React from 'react'
import styles from './Header.module.scss'

const Header: React.FC = () => (
    <div className={styles['header']}>
        <div className={styles['header__title']}>Welcome to our restaurant.</div>
        <div className={styles['header__subtitle']}>Our food is super awesome. Enjoy your time with us</div>
    </div>
)

export default Header
