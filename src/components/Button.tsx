import React from 'react';
import styles from "./Button.module.scss"
import classNames from 'classnames/bind';

type ButtonProps = {
    title: string;
    onClick: () => void;
}

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps>  = ({title, onClick}) => {
    return (<button className={cx('body')} title={title} onClick={onClick}>Mygelis</button>)
}

export default Button;