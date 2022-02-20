import React from 'react'
import styles from './Total.module.scss'

type TotalProps = {
    price: number
}

const Total: React.FC<TotalProps> = ({ price }) => (
    <div className={styles['total']}>
        <div className={styles['total__total-price']}>Total:</div>
        <div className={styles['total__subtitle}']}>{price}&nbsp;Eur</div>
    </div>
)

export default Total
