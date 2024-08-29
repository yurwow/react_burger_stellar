import React, {useEffect, useState} from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../data";
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import styles from './BurgerIngredients.module.css'

const BurgerIngredients = () => {
    const [current, setCurrent] = useState('bun');
    function toggleScroll(e) {
        document.getElementById(e).scrollIntoView();
        setCurrent(e)
    }
    const [items, setItems] = useState({
        buns: [],
        sauce: [],
        fillings: [],
    })

    useEffect(() => {
        const bunsContainer = [];
        const sauceContainer = [];
        const fillingContainer = [];
        data.forEach((i) => {
            switch (i.type) {
                case 'bun':
                    bunsContainer.push(i);
                    break;
                case 'sauce':
                    sauceContainer.push(i);
                    break;
                case 'main':
                    fillingContainer.push(i);
                    break;
                default:
            }
        });
        setItems({
            buns: bunsContainer,
            sauce: sauceContainer,
            fillings: fillingContainer,
        })
    }, []);

    return (
        <div className={styles.container}>
            <p className="text text_type_main-large mt-10">
                Соберите бургер
            </p>
            <div style={{display: 'flex'}} className="mt-5">
                <Tab value="bun" active={current === 'bun'} onClick={toggleScroll}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={toggleScroll}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={current === 'fillings'} onClick={toggleScroll}>
                    Начинки
                </Tab>
            </div>
            <p id="bun" className="text text_type_main-medium mt-10">
                Булки
            </p>
            <div  className={styles.items}>
                {items.buns.map((bun) => (
                    <IngredientsItem key={bun._id} price={bun.price} src={bun.image} text={bun.name}/>
                ))}
            </div>
            <p id="sauce" className="text text_type_main-medium mt-10">
                Соусы
            </p>
            <div  className={styles.items}>
                {items.sauce.map((sauce) => (
                    <IngredientsItem key={sauce._id} price={sauce.price} text={sauce.name} src={sauce.image}/>
                ))}
            </div>
            <p id="fillings" className="text text_type_main-medium mt-10">
                Начинки
            </p>
            <div  className={styles.items}>
                {items.fillings.map((filling) => (
                    <IngredientsItem key={filling._id} price={filling.price} text={filling.name} src={filling.image}/>
                ))}
            </div>
        </div>
    );
};

export default BurgerIngredients;
