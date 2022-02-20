import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
    title: string
    onClick: (e: never) => void
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
    <button className={styles['button']} onClick={onClick}>
        {title}
    </button>
)

export default Button
