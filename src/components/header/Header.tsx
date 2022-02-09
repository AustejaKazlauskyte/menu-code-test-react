import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'

type HeaderProps = {
    title: string
    subtitle: string
}

const cx = classNames.bind(styles)

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <div className={cx('header')}>
            <div className={cx('header__title')}>{title}</div>
            <div className={cx('header__subtitle')}>{subtitle}</div>
        </div>
    )
}

export default Header
