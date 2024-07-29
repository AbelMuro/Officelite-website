import React from 'react';
import {useNavigate} from 'react-router-dom'
import images from './images';
import * as styles from './styles.module.css';

function Introduction() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/SignUp');
    }

    return(
        <article className={styles.container}>
            <section className={styles.content}>
                <h1>
                    A simple solution to complex tasks is coming soon
                </h1>
                <p>
                    Say goodbye to inefficient juggling of multiple apps, 
                    teams, and projects. Officelite is the new collaboration 
                    platform built with an intuitive interface to improve productivity.
                </p>
                <button onClick={handleNavigation}>
                    Get Started
                </button>
            </section>
            <img className={styles.chart} src={images['charts']}/>
        </article> 
    )
}

export default Introduction;