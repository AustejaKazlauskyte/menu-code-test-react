import * as React from 'react';
import Button from '../components/Button';
import styles from "./Main.module.scss"
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Main: React.FC = () => {
    return (<div className={cx('body')}>
        <span>Finally no TS errors, phew</span>
        <Button title={"test title"} onClick={() => console.log('I was clicked')}>Click click</Button>
    </div>);
}
export default Main;