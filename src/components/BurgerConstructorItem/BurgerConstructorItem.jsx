import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorItem = ({text, thumbnail, type, price}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <DragIcon type="primary" className='mr-2'/>
            <ConstructorElement
                type={type}
                isLocked={true}
                text={text}
                price={price}
                thumbnail={thumbnail}
            />
        </div>
    );
};

export default BurgerConstructorItem;
