import styles from './index.module.css';
import React from 'react';
import classNames from "classnames";

const CreateBrand = ({showModal, onHide}) => {
    return (
        <div className={classNames(styles.modal, {[styles.visible]: showModal === true})} >
            <div className={styles.modal_content}>
                <div className={styles.close} onClick={onHide}>&times;</div>
                <form className={styles.form}>
                    <input className={styles.input} placeholder={'Enter the brand'}/>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateBrand;
