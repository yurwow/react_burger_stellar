import React from 'react';
import styles from './HeaderItem.module.css';
const HeaderItem = ({component, text}) => {
    return (
        <>
            <a className={`${styles.button} pl-5 pr-5 pb-4 pt-4`}>
                {component}
                <p className="text text_type_main-default ml-2">
                    {text}
                </p>
            </a>
        </>

    );
};

export default HeaderItem;
