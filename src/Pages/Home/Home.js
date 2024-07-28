import React from 'react';
import images from './images'
import * as styles from './styles.module.css';


//now i need to implement the subscription options component for this webpage

function Home() {
    return(
        <main className={styles.container}>
            <section className={styles.content}>
                <h1>
                    A simple solution to complex tasks is coming soon
                </h1>
                <p>
                    Say goodbye to inefficient juggling of multiple apps, 
                    teams, and projects. Officelite is the new collaboration 
                    platform built with an intuitive interface to improve productivity.
                </p>
                <button>
                    Get Started
                </button>
            </section>
            <img className={styles.chart} src={images['charts']}/>
        </main>
    )
}

export default Home;