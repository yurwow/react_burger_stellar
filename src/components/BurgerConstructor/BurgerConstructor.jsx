import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../data";

const BurgerConstructor = () => {
    return (
        <div>
            <div className={'mt-25 ml-10'}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={data.image_mobile}
                    />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={data.image}
                    />
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={data.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default BurgerConstructor;
