import React from 'react'
import classNames from 'classnames/bind'
import styles from './Counter.module.scss'
import Button from '../../button/Button'

type CounterProps = {
    onIncrease: () => void
    onDecrease: () => void
    quantity: number
}

const cx = classNames.bind(styles)

const Counter: React.FC<CounterProps> = ({ onIncrease, onDecrease, quantity }) => (
    <div className={cx('counter')}>
        <Button title="+" onClick={onIncrease} />
        <div>{quantity}</div>
        <Button title="-" onClick={onDecrease} />
    </div>
)

export default Counter
