import styles from './index.module.css';
import React, {useState} from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordion_item}>
            <div className={styles.accordion_title} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={styles.accordion_content}>{content}</div>}
        </div>
    );
};

export default Accordion
