import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import MenuItem from './inner-components/menu-item/MenuItem'
import Total from './inner-components/total/Total'
import { mockedData } from '../../server/static/mocked-data'

type MenuProps = {}

const cx = classNames.bind(styles)

const Menu: React.FC<MenuProps> = () => {
    const [menu, setMenu] = useState(mockedData)
    const [quantity, setQuantity] = useState(0)
    const onIncrease = () => {
        setQuantity(quantity + 1)
    }

    const onDecrease = () => {
        if (quantity === 0) {
            return
        }
        setQuantity(quantity - 1)
    }

    const items = Object.keys(menu)

    let arrayOfMeals: { id: number; name: string; price: number }[][] = []

    const starters = mockedData.starters
    const main = mockedData.mains
    const desserts = mockedData.desserts

    arrayOfMeals.push(starters, main, desserts)

    return (
        <div className={cx('menu')}>
            {items.map((item, index) => (
                <>
                    <div key={index} className={cx('menu__title')}>
                        {item.toUpperCase()}
                    </div>

                    {arrayOfMeals[index].map((i, index: number) => (
                        <MenuItem key={index} title={i.name} price={i.price} quantity={quantity} onDecrease={onDecrease} onIncrease={onIncrease} />
                    ))}
                </>
            ))}
            <div className={cx('menu__wrapper')}>
                <Total title="Selected meals" price={880} />
            </div>
        </div>
    )
}

export default Menu
