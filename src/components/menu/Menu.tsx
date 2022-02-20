import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import Total from './inner-components/total/Total'
import Button from '../button/Button'

type Item = {
    id: number
    name: string
    price: number
}

type Menu = {
    [key: string]: Item[]
    starters: Item[]
    mains: Item[]
    desserts: Item[]
}

type AmountMap = { [key: string]: number }

type ItemMap = { [key: string]: Item }

const filterFirstById = (meals: Item[], mealId: string) => {
    const index = meals.findIndex(({ id }) => id.toString() === mealId)
    return meals.filter((meal, i) => i !== index)
}

const Menu: React.FC = () => {
    const [response, setResponse] = useState<Menu>({
        starters: [],
        mains: [],
        desserts: [],
    })
    const [mappedResponse, setMappedResponse] = useState<ItemMap>({})
    const [totalPrice, setTotalPrice] = useState<number>(null)
    const [listOfSelectedOrdersPrices, setListOfSelectedOrdersPrices] = useState<number[]>([0])
    const [newOrder, setNewOrder] = useState<Menu>({
        starters: [],
        mains: [],
        desserts: [],
    })
    const [amount, setAmount] = useState<AmountMap>({})

    const QUERY = `{ 
  menu
  { 
    starters {
      id name price
    }
    mains {
      id name price
    } 
    desserts {
      id name price
    }
  }
}`

    useEffect(() => {
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ query: QUERY }),
        })
            .then((r) => r.json())
            .then(({ data }) => {
                setResponse(data.menu)
                const responseMap: ItemMap = {}
                data.menu.starters.forEach((i: Item) => (responseMap[i.id] = i))
                data.menu.mains.forEach((i: Item) => (responseMap[i.id] = i))
                data.menu.desserts.forEach((i: Item) => (responseMap[i.id] = i))
                setMappedResponse(responseMap)
            })
    }, [])

    const validate = (mealType: string, meal: Item) => {
        if (mealType === 'desserts') {
            if (meal.name === 'Cheesecake' && amount[meal.id] > 0) {
                return false
            }
        } else if (mealType === 'mains') {
            if (newOrder.mains.length === 2) {
                return false
            }
        }

        return true
    }

    const onAdd = (e: any, mealType: string, mealId: string) => {
        e.preventDefault()

        const meal = mappedResponse[mealId]

        setNewOrder((prevState) => {
            const updatedOrder: Menu = { ...prevState }

            setAmount({
                ...amount,
                [mealId]: amount[mealId] ? amount[mealId] + 1 : 1,
            })
            setTotalPrice((prevState) => prevState + meal.price)
            setListOfSelectedOrdersPrices([...listOfSelectedOrdersPrices, mappedResponse[mealId].price])
            updatedOrder[mealType].push(meal)
            return updatedOrder
        })
    }

    const onRemove = (e: any, mealType: string, mealId: string) => {
        e.preventDefault()

        setNewOrder((prevState) => {
            const updatedOrder: Menu = { ...prevState }

            if (mealType === 'starters') {
                updatedOrder.starters = filterFirstById(prevState.starters, mealId)
            } else if (mealType === 'mains') {
                updatedOrder.mains = filterFirstById(prevState.mains, mealId)
            } else if (mealType === 'desserts') {
                updatedOrder.desserts = filterFirstById(prevState.desserts, mealId)
            }
            return updatedOrder
        })

        if (amount[mealId] > 0) {
            setTotalPrice((prevState) => prevState - mappedResponse[mealId].price)
        }

        setAmount({
            ...amount,
            [mealId]: amount[mealId] ? amount[mealId] - 1 : 0,
        })
    }

    return (
        <div className={styles.menu}>
            <div>
                {Object.entries(response).map(([key, value]) => (
                    <div key={key}>
                        <div className={styles['menu__title']}>{key.toUpperCase()}</div>

                        {value.map((meal) => (
                            <div className={styles['menu__item']} key={meal.id}>
                                <div className={styles['menu__item-wrapper']}>
                                    <div>
                                        {meal.name}
                                        &nbsp;
                                        {meal.price}
                                        &nbsp;€
                                    </div>
                                </div>

                                <div className={styles['menu__counter-wrapper']}>
                                    <Button title="-" onClick={(e) => onRemove(e, key, meal.id.toString())} />
                                    <div>{amount[meal.id] || 0}</div>
                                    <Button title="+" onClick={(e) => validate(key, meal) && onAdd(e, key, meal.id.toString())} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles['menu__actions-wrapper']}>
                <div className={styles['menu__selection-wrapper']}>
                    <Total price={totalPrice} />
                </div>
                <div className={styles['menu__order']}>
                    <Button title="Order Now" onClick={() => console.log('I was clicked')} />
                </div>
            </div>
        </div>
    )
}

export default Menu
