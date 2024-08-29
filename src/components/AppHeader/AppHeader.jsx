import React from 'react';
import styles from './AppHeader.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderItem from "../HeaderItem/HeaderItem";

const AppHeader = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className="pt-6 pb-6">
                        <ul className={styles.ul}>
                            <li className={`mr-2`}>
                                <HeaderItem component={<BurgerIcon type="primary"/>} text={'Конструктор'}/>
                            </li>
                            <li style={{ marginRight: 112 }}>
                                <HeaderItem component={<ListIcon type="primary"/>} text={'Лента заказов'}/>
                            </li>
                            <li style={{marginRight: 288}}>
                                <Logo/>
                            </li>
                            <li >
                                <HeaderItem component={<ProfileIcon type="primary"/>} text={'Личный кабинет'}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default AppHeader;
