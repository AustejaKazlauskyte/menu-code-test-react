import * as React from 'react'
import Button from '../components/button/Button'
import styles from './Main.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'

const cx = classNames.bind(styles)

const Main: React.FC = () => {
    return (
        <div className={cx('body')}>
            <Header title={'Welcome to our restaurant.'} subtitle={'Our food is super awesome. Enjoy your time with us'} />
            <Menu />
            <Button title={'Order Now'} onClick={() => console.log('I was clicked')} />
        </div>
    )
}
export default Main
