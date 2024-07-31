import React from 'react';
import { useNavigate } from 'react-router-dom';
import icons from './icons';
import * as styles from './styles.module.css';

function HeaderBar() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return(
        <header className={styles.container}>
            <button className={styles.nav_link} onClick={handleNavigate}>
                <img className={styles.logo} src={icons['logo']} />
            </button>
            
        </header>
    )
}

export default HeaderBar;