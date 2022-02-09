import React from 'react'
import styles from './Total.module.scss'
import classNames from 'classnames/bind'

type TotalProps = {
    title: string
    price: number
}

const cx = classNames.bind(styles)

const Total: React.FC<TotalProps> = ({ title, price }) => {
    return (
        <div className={cx('total')}>
            <div className={cx('total__title')}>{title}</div>
            <div className={cx('total__price')}>{price}</div>
        </div>
    )
}

export default Total
