import React from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../data";
import BurgerConstructorItem from "../BurgerConstructorItem/BurgerConstructorItem";

const BurgerConstructor = () => {
    return (
        <div>
            <div className={'mt-25 ml-10'}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    {data.map((item) => (
                        <BurgerConstructorItem
                            text={item.name}
                            key={item._id}
                            price={item.price}
                            thumbnail={item.image}
                            type='top'/>
                    ))}
                </div>
            </div>
            <div className='mt-10' style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon className='mr-10' type="primary"/>
                <Button style={{display: 'flex'}}  htmlType="button" type="primary" size="large" >
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
};

export default BurgerConstructor;
