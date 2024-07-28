import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function HeaderBar() {
    return(
        <header className={styles.container}>
            <img className={styles.logo} src={icons['logo']}/>
        </header>
    )
}

export default HeaderBar;