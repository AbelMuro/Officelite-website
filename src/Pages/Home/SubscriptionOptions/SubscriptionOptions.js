import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as styles from './styles.module.css';

function SubscriptionOptions(){
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(link);
    }

    return(
        <section className={styles.container}>
            <ul className={styles.subscriptions}>
                <li className={styles.subscription}>
                    <p>
                        Basic
                    </p>
                    <strong>
                        Free
                    </strong>
                    <em>
                        Up to 5 users for free
                    </em>
                    <div className={styles.subscription_details}>
                        <p>
                            Basic document collaboration
                        </p>
                        <p>
                            2 GB storage
                        </p>
                        <p>
                            Great security and support
                        </p>
                    </div>
                    <button onClick={() => handleNavigate('/SignUp')}>
                        Try for free
                    </button>
                </li>
                <li className={styles.subscription} id={styles.pro}>
                    <p>
                        Pro
                    </p>
                    <strong>
                        $9.99
                    </strong>
                    <em>
                        Per user, billed monthly
                    </em>
                    <div className={styles.subscription_details}>
                        <p>
                            All essential integrations
                        </p>
                        <p>
                            50 GB storage
                        </p>
                        <p>
                            More control and insights
                        </p>
                    </div>
                    <button onClick={() => handleNavigate('/SignUp')}>
                        Try for free
                    </button>
                </li>
                <li className={styles.subscription}>
                    <p>
                        Ultimate
                    </p>
                    <strong>
                        $19.99
                    </strong>
                    <em>
                        Per user, billed monthly
                    </em>
                    <div className={styles.subscription_details}>
                        <p>
                            Robust work management
                        </p>
                        <p>
                            100 GB storage
                        </p>
                        <p>
                            VIP support
                        </p>
                    </div>
                    <button onClick={() => handleNavigate('/SignUp')}>
                        Try for free
                    </button>
                </li>
            </ul>
            <div className={styles.countdown}>
                <section className={styles.timer}>
                    <h1>
                        Coming <span>4 Nov 2020</span>
                    </h1>
                    <div className={styles.time}>
                        <strong>
                            47
                        </strong>
                        <em>
                            days  
                        </em>
                    </div>
                    <div className={styles.time}>
                        <strong>
                            07
                        </strong>
                        <em>
                            hours 
                        </em>
                    </div>
                    <div className={styles.time}>
                        <strong>
                            56
                        </strong>
                        <em>
                            min
                        </em>
                    </div>
                    <div className={styles.time}>
                        <strong>
                            14
                        </strong>
                        <em>
                            sec  
                        </em>
                    </div>
                </section>
                <button onClick={() => handleNavigate('/SignUp')}>
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default SubscriptionOptions;