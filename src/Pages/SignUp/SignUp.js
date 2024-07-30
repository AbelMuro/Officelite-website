import React from 'react';
import Form from './Form';
import images from './images';
import * as styles from './styles.module.css';

//i will need to work on the responsiveness for tablet

function SignUp(){

    return(
        <main className={styles.container}>
            <img className={styles.background} src={images['pattern']}/>
            <section className={styles.content}>
                <h1>
                    Work smarter. Save time.
                </h1>
                <p>
                    Easily manage your projects. 
                    Get on the list and receive in-app perks 
                    available only to early subscribers. 
                    We are moving into final development 
                    and getting ready for official launch soon.  
                </p>
                <div className={styles.countdown}>
                    <h2>
                        coming <span>4 nov 2020</span>
                    </h2>
                    <div className={styles.countdown_time}>
                        <strong>
                            47
                        </strong>
                        <p>
                            days
                        </p>
                    </div>
                    <div className={styles.countdown_time}>
                        <strong>
                            07
                        </strong>
                        <p>
                            hours
                        </p>
                    </div>
                    <div className={styles.countdown_time}>
                        <strong>
                            56
                        </strong>
                        <p>
                            min
                        </p>
                    </div>
                    <div className={styles.countdown_time}>
                        <strong>
                            14
                        </strong>
                        <p>
                            sec
                        </p>
                    </div>
                </div>
            </section>
            <Form/>
        </main>
    )
}

export default SignUp;