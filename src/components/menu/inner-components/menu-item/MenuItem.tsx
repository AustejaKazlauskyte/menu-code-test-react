import React, { useState } from 'react'
import styles from './MenuItem.module.scss'
import classNames from 'classnames/bind'
import Counter from '../Counter'
import Button from '../../../button/Button'

type MenuItemProps = {
    title: string
    price: number
    quantity: number
    onDecrease: () => void
    onIncrease: () => void
}

const cx = classNames.bind(styles)

const MenuItem: React.FC<MenuItemProps> = ({ title, price, quantity, onDecrease, onIncrease }) => {
    return (
        <div className={cx('item')}>
            <div className={cx('item__wrapper')}>
                <div className={cx('item__title')}>{title}</div>
                <div className={cx('item__price')}>{price}&nbsp;€</div>
            </div>
            <div className={cx('item__counter-wrapper')}>
                <Counter quantity={quantity} onDecrease={onDecrease} onIncrease={onIncrease} />
                <Button title={'Add'} onClick={() => console.log('added to order')} />
            </div>
        </div>
    )
}

export default MenuItem
