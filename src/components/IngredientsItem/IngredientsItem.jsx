import React, {useState} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./IngredientsItem.module.css";

const IngredientsItem = ({src, price, text}) => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className='mt-6' onClick={handleClick}>
            <div className={styles.container}>
                {count > 0 &&
                    <div className={styles.count}>
                    <Counter count={count} size="default" extraClass="m-1"/>
                </div>}
                <img src={src} alt='logo' className='ml-4 mr-4'/>
                <div className={styles.price}>
                    <p className="text text_type_digits-default mt-1">{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <p className={`text text_type_main-small mt-1 ${styles.price}`}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default IngredientsItem;
